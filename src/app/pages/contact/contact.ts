import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Contact — Elkasha | Book a Free Consultation');
    this.meta.updateTag({ name: 'description', content: 'Get in touch with Elkasha. Book a free 20-minute discovery call via Calendly or send us an email with your project requirements.' });
  }

  calendlyUrl = 'https://calendly.com/mayankgupta-india/30min';
  email = 'devsupport@elkasha.com';

  form = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

  submitted = signal(false);
  submitting = signal(false);

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

  sendEmail() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.submitting.set(true);
    // Open mailto with pre-filled content
    window.location.href = this.mailtoLink;
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 600);
  }
}
