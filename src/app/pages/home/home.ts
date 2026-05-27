import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Elkasha — Bespoke Web Apps & Cloud Solutions for Small Businesses');
    this.meta.updateTag({ name: 'description', content: 'Elkasha helps small businesses and startups build custom web apps, migrate to the cloud, and validate ideas with proof of concepts. Book a free consultation.' });
  }

  services = [
    {
      icon: '🛠️',
      title: 'Bespoke Web Applications',
      description: 'Custom-built web tools designed around your exact business needs. From media processing tools to inventory systems — we build it, you own it.',
      link: '/services'
    },
    {
      icon: '☁️',
      title: 'Cloud Migration',
      description: 'Move your on-premise software to AWS, GCP, or Azure for improved reliability, high availability, and lower long-term costs.',
      link: '/services'
    },
    {
      icon: '🚀',
      title: 'Proof of Concepts',
      description: 'Validate your idea in a cloud environment before full investment. Understand the technical challenges and get realistic cost estimates.',
      link: '/services'
    }
  ];

  apps = [
    {
      name: 'WhatsApp Business Chat',
      tagline: 'Managed WhatsApp Automation for Your Business',
      description: 'A live demo showcasing automated WhatsApp Business Chat — instant responses, stateful conversation flows, and cloud-backed message handling. We can build a fully customised WhatsApp chat solution for your business.',
      url: 'https://wa.me/919971905553',
      tags: ['WhatsApp', 'Messaging', 'Automation', 'Cloud'],
      emoji: '💬'
    },
    {
      name: 'Elkasha Tracking',
      tagline: 'Real-Time GPS & Device Location Tracking',
      description: 'A customised GPS tracking platform built on Traccar, supporting real-time location monitoring for GPS hardware devices and mobile phones. We can deploy a fully tailored, self-hosted version for your fleet, field team, or asset tracking needs.',
      url: 'https://tracking.elkasha.com',
      tags: ['GPS Tracking', 'IoT', 'Real-Time', 'Fleet Management'],
      emoji: '📡'
    },
    {
      name: 'MediaConvertZone',
      tagline: 'Free Online Media Conversion Platform',
      description: 'A browser-based platform offering video, audio, and image format conversion tools — no software installation required. Built for media professionals, content creators, and everyday users who need fast, reliable file conversions.',
      url: 'https://mediaconvertzone.com',
      tags: ['Video Conversion', 'Audio Tools', 'Image Processing', 'Browser-Based'],
      emoji: '🎬'
    },
    {
      name: 'AnalyzeBig',
      tagline: 'Big Data Analytics Made Accessible',
      description: 'A powerful analytics platform designed to help businesses make sense of large datasets. Analyze, visualise, and derive actionable insights from your data without needing a dedicated data engineering team.',
      url: 'https://analyzebig.com',
      tags: ['Data Analytics', 'Visualisation', 'Business Intelligence', 'Cloud-Powered'],
      emoji: '📊'
    }
  ];

  reasons = [
    { icon: '🎯', title: 'Built for Small Business', text: 'We specialise in right-sized solutions — no enterprise bloat, just what your business actually needs.' },
    { icon: '💬', title: 'Transparent Communication', text: 'Regular updates, plain-English explanations, and a direct line to your developer throughout the project.' },
    { icon: '📦', title: 'End-to-End Delivery', text: 'From initial concept and architecture to deployment and handover — we handle the full lifecycle.' }
  ];
}
