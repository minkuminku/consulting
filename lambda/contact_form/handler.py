import json
import os
import re
import boto3
from botocore.exceptions import ClientError

ses = boto3.client('ses', region_name=os.environ.get('SES_REGION', 'ap-south-1'))

RECIPIENT_EMAIL    = os.environ['RECIPIENT_EMAIL']  # e.g. devsupport@elkasha.com
SENDER_EMAIL       = os.environ['SENDER_EMAIL']      # must be SES-verified, e.g. noreply@elkasha.com
ALLOWED_ORIGIN     = os.environ.get('ALLOWED_ORIGIN', 'https://elkasha.com')
NAME_CHAR_LIMIT    = int(os.environ.get('NAME_CHAR_LIMIT',    '100'))
EMAIL_CHAR_LIMIT   = int(os.environ.get('EMAIL_CHAR_LIMIT',   '254'))
COMPANY_CHAR_LIMIT = int(os.environ.get('COMPANY_CHAR_LIMIT', '150'))
MESSAGE_CHAR_LIMIT = int(os.environ.get('MESSAGE_CHAR_LIMIT', '1000'))
ALLOWED_SERVICES   = {
    'Bespoke Web Application',
    'Cloud Migration',
    'Proof of Concept',
    'General Consultation',
    'Not Sure Yet',
    '',  # optional field — empty is valid
}

CORS_HEADERS = {
    'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Content-Type': 'application/json',
}


def _valid_email(email: str) -> bool:
    return bool(re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', email))


def _response(status: int, body: dict) -> dict:
    return {
        'statusCode': status,
        'headers': CORS_HEADERS,
        'body': json.dumps(body),
    }


def lambda_handler(event, context):
    # Handle CORS preflight
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    try:
        body = json.loads(event.get('body') or '{}')
    except (json.JSONDecodeError, TypeError):
        return _response(400, {'error': 'Invalid request body'})

    # Honeypot — bots fill the hidden 'website' field; reject silently with 200
    if body.get('website'):
        return _response(200, {'message': 'ok'})

    name    = str(body.get('name',    '')).strip()
    email   = str(body.get('email',   '')).strip()
    company = str(body.get('company', '')).strip()
    service = str(body.get('service', '')).strip()
    message = str(body.get('message', '')).strip()

    # Basic validation
    if not name or not email or not message:
        return _response(400, {'error': 'Name, email and message are required'})
    if len(name) > NAME_CHAR_LIMIT:
        return _response(400, {'error': f'Name must be under {NAME_CHAR_LIMIT} characters'})
    if not _valid_email(email):
        return _response(400, {'error': 'Invalid email address'})
    if len(email) > EMAIL_CHAR_LIMIT:
        return _response(400, {'error': f'Email must be under {EMAIL_CHAR_LIMIT} characters'})
    if len(company) > COMPANY_CHAR_LIMIT:
        return _response(400, {'error': f'Company name must be under {COMPANY_CHAR_LIMIT} characters'})
    if service not in ALLOWED_SERVICES:
        return _response(400, {'error': 'Invalid service selection'})
    if len(message) > MESSAGE_CHAR_LIMIT:
        return _response(400, {'error': f'Message must be under {MESSAGE_CHAR_LIMIT} characters (yours has {len(message)})'})

    subject = f"New Enquiry from {name} — Elkasha"

    text_body = (
        f"New contact form submission\n"
        f"{'=' * 40}\n"
        f"Name:    {name}\n"
        f"Email:   {email}\n"
        f"Company: {company or 'Not provided'}\n"
        f"Service: {service or 'Not specified'}\n\n"
        f"Message:\n{message}\n\n"
        f"---\nReply directly to this email to respond to {name}."
    )

    html_body = f"""<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;color:#1e293b;max-width:600px;margin:0 auto;padding:24px;">
  <h2 style="color:#2563eb;border-bottom:2px solid #e2e8f0;padding-bottom:12px;">
    New Enquiry — Elkasha
  </h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
    <tr>
      <td style="padding:8px 0;color:#64748b;width:120px;"><strong>Name</strong></td>
      <td style="padding:8px 0;">{name}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;color:#64748b;"><strong>Email</strong></td>
      <td style="padding:8px 0;"><a href="mailto:{email}">{email}</a></td>
    </tr>
    <tr>
      <td style="padding:8px 0;color:#64748b;"><strong>Company</strong></td>
      <td style="padding:8px 0;">{company or '<em>Not provided</em>'}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;color:#64748b;"><strong>Service</strong></td>
      <td style="padding:8px 0;">{service or '<em>Not specified</em>'}</td>
    </tr>
  </table>
  <h3 style="color:#475569;margin-bottom:8px;">Message</h3>
  <div style="background:#f8fafc;border-left:4px solid #2563eb;padding:16px;
              border-radius:4px;white-space:pre-wrap;line-height:1.6;">{message}</div>
  <p style="margin-top:24px;font-size:0.875rem;color:#94a3b8;">
    Reply directly to this email to respond to {name}.
  </p>
</body>
</html>"""

    try:
        ses.send_email(
            Source=SENDER_EMAIL,
            Destination={'ToAddresses': [RECIPIENT_EMAIL]},
            ReplyToAddresses=[email],
            Message={
                'Subject': {'Data': subject,    'Charset': 'UTF-8'},
                'Body': {
                    'Text': {'Data': text_body, 'Charset': 'UTF-8'},
                    'Html': {'Data': html_body,  'Charset': 'UTF-8'},
                },
            },
        )
        return _response(200, {'message': 'Message sent successfully'})

    except ClientError as e:
        print(f"SES ClientError: {e.response['Error']['Code']} — {e.response['Error']['Message']}")
        return _response(500, {'error': 'Failed to send message. Please try again.'})
