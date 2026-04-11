import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

interface FaqItem {
  q: string;
  a: string;
  open: boolean;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('FAQ — DevConsult | Common Questions About Our Services');
    this.meta.updateTag({ name: 'description', content: 'Answers to common questions about DevConsult\'s software consulting services — pricing, timelines, cloud platforms, how we work, and more.' });
  }

  faqs: FaqCategory[] = [
    {
      category: 'Working With Us',
      items: [
        {
          q: 'What is the first step to working with DevConsult?',
          a: 'The best starting point is a free 30-minute discovery call. We\'ll discuss your business, what you\'re trying to achieve, and whether we\'re the right fit. There\'s no commitment required — just an honest conversation.',
          open: false
        },
        {
          q: 'What types of businesses do you typically work with?',
          a: 'We primarily work with small businesses, startups, and individual entrepreneurs who need practical software solutions without the overhead of a large agency. If you\'re a growing business with a real problem to solve, we\'re likely a good match.',
          open: false
        },
        {
          q: 'Do I need a technical background to work with you?',
          a: 'Not at all. We\'re used to working with non-technical founders and business owners. We translate technical concepts into plain language and make sure you understand every decision throughout the project.',
          open: false
        },
        {
          q: 'Will I have a single point of contact?',
          a: 'Yes. You\'ll work directly with a senior developer — not passed between account managers and developers. This keeps communication clear and decisions fast.',
          open: false
        }
      ]
    },
    {
      category: 'Projects & Timelines',
      items: [
        {
          q: 'How long does a typical project take?',
          a: 'It depends on the scope. A proof of concept can be completed in 1–2 weeks. A small bespoke web application typically takes 4–8 weeks. Larger projects or cloud migrations are scoped individually. We\'ll always give you a realistic timeline upfront.',
          open: false
        },
        {
          q: 'How do you handle project changes mid-way?',
          a: 'We work iteratively and expect some changes. For significant scope changes we\'ll discuss the impact on timeline and cost openly before proceeding — no surprises.',
          open: false
        },
        {
          q: 'What does your development process look like?',
          a: 'We follow an iterative approach: discovery → proposal → build (with regular check-ins) → delivery. You\'ll see progress throughout, not just at the end.',
          open: false
        },
        {
          q: 'Do you provide documentation and handover?',
          a: 'Yes. All projects include documentation covering how the system works, how to make basic changes, and how to manage the infrastructure. We also offer handover calls to walk you through everything.',
          open: false
        }
      ]
    },
    {
      category: 'Cloud & Technology',
      items: [
        {
          q: 'Which cloud platforms do you work with?',
          a: 'We work primarily with AWS (Amazon Web Services), Google Cloud Platform (GCP), and Microsoft Azure. We\'ll recommend the best platform based on your needs, existing setup, and budget.',
          open: false
        },
        {
          q: 'What programming languages and frameworks do you use?',
          a: 'Our core stack includes Angular, React, Node.js, Python, and TypeScript. For cloud infrastructure we use Terraform and native cloud services. We choose the right tool for each job.',
          open: false
        },
        {
          q: 'What is a Proof of Concept (POC) and why is it useful?',
          a: 'A POC is a lightweight, time-boxed build that tests whether a specific technical approach will work — before committing to full development. It\'s especially useful for new product ideas, unusual integrations, or anything where the technical feasibility is unclear. You get answers fast, with a fraction of the full investment.',
          open: false
        },
        {
          q: 'Will my cloud infrastructure be cost-efficient?',
          a: 'Cost efficiency is a key part of our cloud work. We design architectures that scale with usage (you pay for what you use), and we provide estimated monthly running costs as part of every cloud project.',
          open: false
        }
      ]
    },
    {
      category: 'Pricing & Ownership',
      items: [
        {
          q: 'How much does a consultation cost?',
          a: 'The initial discovery call is completely free. Project pricing is based on scope and is quoted transparently after our first conversation. We don\'t charge by the hour for small projects — we prefer fixed-price engagements so you know exactly what you\'re paying.',
          open: false
        },
        {
          q: 'Who owns the code and intellectual property after the project?',
          a: 'You do. 100%. All code, designs, and assets we build for you become your property on final payment. We don\'t hold your software hostage.',
          open: false
        },
        {
          q: 'Do you offer ongoing support after the project is delivered?',
          a: 'Yes. We offer optional ongoing support and maintenance retainers. We can handle bug fixes, minor feature additions, security updates, and cloud infrastructure monitoring.',
          open: false
        },
        {
          q: 'Can you work within a tight budget?',
          a: 'We understand budget constraints are real for small businesses. We\'ll always scope work to fit your budget and be honest if something isn\'t achievable within it. Sometimes phasing a project over time is the right approach.',
          open: false
        }
      ]
    }
  ];

  toggle(catIndex: number, itemIndex: number) {
    const item = this.faqs[catIndex].items[itemIndex];
    item.open = !item.open;
  }
}
