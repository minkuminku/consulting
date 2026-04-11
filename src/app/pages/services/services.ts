import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Services — DevConsult | Bespoke Web Apps, Cloud Migration & POCs');
    this.meta.updateTag({ name: 'description', content: 'DevConsult offers bespoke web application development, cloud migration for on-premise tools, and proof-of-concept builds for small businesses and startups.' });
  }

  services = [
    {
      id: 'bespoke',
      icon: '🛠️',
      title: 'Bespoke Web Applications',
      tagline: 'Custom software built around your exact workflow',
      description: 'Off-the-shelf software rarely fits perfectly. We design and build web applications tailored to your specific business processes — from internal tools and dashboards to customer-facing platforms.',
      examples: [
        'Video/audio compression & conversion tools for media companies',
        'Booking and scheduling systems',
        'Inventory and order management tools',
        'Custom dashboards and reporting platforms',
        'Client portals and document management systems',
        'Automation tools for repetitive workflows'
      ],
      highlights: [
        { icon: '⚡', label: 'Modern Stack', text: 'Angular, React, Node.js, Python — we use the right technology for your needs.' },
        { icon: '📱', label: 'Mobile Ready', text: 'Fully responsive — works perfectly on desktop, tablet, and mobile.' },
        { icon: '🔒', label: 'Secure by Design', text: 'Security best practices baked in from the start.' }
      ]
    },
    {
      id: 'cloud',
      icon: '☁️',
      title: 'Cloud Migration',
      tagline: 'Move your tools to the cloud for reliability and savings',
      description: 'Running software on local servers or ageing on-premise infrastructure is risky, expensive, and limits growth. We migrate your existing applications to AWS, Google Cloud, or Azure — making them highly available, scalable, and cost-efficient.',
      examples: [
        'Migrating desktop applications to web-based cloud platforms',
        'Moving databases from on-premise to managed cloud services',
        'Containerising applications with Docker and Kubernetes',
        'Setting up auto-scaling for traffic spikes',
        'Implementing CI/CD pipelines for faster deployments',
        'Disaster recovery and backup strategies'
      ],
      highlights: [
        { icon: '💰', label: 'Cost Efficient', text: 'Pay only for what you use — cloud removes the overhead of physical infrastructure.' },
        { icon: '🛡️', label: 'High Availability', text: 'Uptime SLAs, redundancy, and automatic failover keep your tools running 24/7.' },
        { icon: '📈', label: 'Scales with You', text: 'Handle 10 users or 10,000 — the cloud scales instantly to meet demand.' }
      ]
    },
    {
      id: 'poc',
      icon: '🚀',
      title: 'Proof of Concepts',
      tagline: 'Validate your idea before investing the full budget',
      description: "Have a new product idea but unsure if it's technically feasible or what it will cost to build? We set up lightweight proof-of-concept environments in the cloud so you can test your assumptions, understand the real technical challenges, and get honest cost projections — before committing to full development.",
      examples: [
        'Cloud architecture validation for new SaaS ideas',
        'AI/ML pipeline prototypes to test feasibility',
        'API integrations with third-party services',
        'Performance testing and load estimation',
        'New technology evaluation (e.g. serverless, edge computing)',
        'MVP builds to demonstrate the concept to investors'
      ],
      highlights: [
        { icon: '🔍', label: 'Honest Assessment', text: 'We tell you what is and isn\'t feasible — no over-promising.' },
        { icon: '📋', label: 'Cost Estimates', text: 'Realistic running costs and development effort before you commit.' },
        { icon: '⏱️', label: 'Fast Turnaround', text: 'POCs are scoped to be quick — you get answers in days, not months.' }
      ]
    }
  ];

  process = [
    { step: '01', title: 'Discovery Call', text: 'We learn about your business, your goals, and what problem you need solved.' },
    { step: '02', title: 'Scoping & Proposal', text: 'You receive a clear written proposal with timeline, deliverables, and pricing.' },
    { step: '03', title: 'Build & Iterate', text: 'We build iteratively with regular check-ins so you always know what is happening.' },
    { step: '04', title: 'Deliver & Support', text: 'Handover includes documentation, training, and optional ongoing support.' }
  ];
}
