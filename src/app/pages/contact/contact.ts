import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

declare function gtag_report_conversion(url?: string): boolean;

const CONTACT_API_URL = 'https://7nx0g6kqo7.execute-api.ap-south-1.amazonaws.com/contact';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  constructor(private title: Title, private meta: Meta, private http: HttpClient) {}

  ngOnInit() {
    this.title.setTitle('Contact — Elkasha | Book a Free Consultation');
    this.meta.updateTag({ name: 'description', content: 'Get in touch with Elkasha. Book a free 20-minute discovery call via Calendly or send us a message with your project requirements.' });
  }

  calendlyUrl = 'https://calendly.com/mayankgupta-india/30min';
  email = 'devsupport@elkasha.com';

  form = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    website: ''   // honeypot — never shown to users
  };

  submitted  = signal(false);
  submitting = signal(false);
  progress   = signal(0);
  error      = signal('');

  readonly NAME_CHAR_LIMIT    = 100;
  readonly EMAIL_CHAR_LIMIT   = 254;
  readonly COMPANY_CHAR_LIMIT = 150;
  readonly MESSAGE_CHAR_LIMIT = 1000;

  get nameOverLimit():    boolean { return this.form.name.length    > this.NAME_CHAR_LIMIT; }
  get emailOverLimit():   boolean { return this.form.email.length   > this.EMAIL_CHAR_LIMIT; }
  get companyOverLimit(): boolean { return this.form.company.length > this.COMPANY_CHAR_LIMIT; }

  charCount(): number {
    return this.form.message.length;
  }

  get messageOverLimit(): boolean {
    return this.charCount() > this.MESSAGE_CHAR_LIMIT;
  }

  get anyFieldOverLimit(): boolean {
    return this.nameOverLimit || this.emailOverLimit || this.companyOverLimit || this.messageOverLimit;
  }

  services = [
    'Bespoke Web Application',
    'Cloud Migration',
    'Proof of Concept',
    'General Consultation',
    'Not Sure Yet'
  ];

  get mailtoLink(): string {
    const subject = encodeURIComponent(`Project Enquiry from ${this.form.name || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\nCompany: ${this.form.company}\nService: ${this.form.service}\n\n${this.form.message}`
    );
    return `mailto:${this.email}?subject=${subject}&body=${body}`;
  }

  trackCalendlyClick() {
    gtag_report_conversion(this.calendlyUrl);
  }

  sendMessage() {
    if (!this.form.name || !this.form.email || !this.form.message || this.anyFieldOverLimit) return;

    this.submitting.set(true);
    this.error.set('');
    this.progress.set(0);

    // Animate progress bar to 85% while request is in flight
    const tick = () => {
      this.progress.update(v => {
        if (v < 85) return v + (85 - v) * 0.08;
        return v;
      });
    };
    const interval = setInterval(tick, 80);

    this.http.post<{ message?: string; error?: string }>(CONTACT_API_URL, {
      name:    this.form.name,
      email:   this.form.email,
      company: this.form.company,
      service: this.form.service,
      message: this.form.message,
      website: this.form.website, // honeypot
    }).subscribe({
      next: () => {
        clearInterval(interval);
        this.progress.set(100);
        setTimeout(() => {
          this.submitting.set(false);
          this.submitted.set(true);
          gtag_report_conversion();
        }, 400);
      },
      error: (err) => {
        clearInterval(interval);
        this.progress.set(0);
        this.submitting.set(false);
        const msg = err?.error?.error;
        this.error.set(msg || 'Something went wrong. Please try again or email us directly.');
      }
    });
  }

  retry() {
    this.error.set('');
  }
}
