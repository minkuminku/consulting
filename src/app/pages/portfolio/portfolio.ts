import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {
  constructor(private title: Title, private meta: Meta, private sanitizer: DomSanitizer) {}

  safeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
    this.title.setTitle('Portfolio — Elkasha | Live Apps We\'ve Built');
    this.meta.updateTag({ name: 'description', content: 'Explore Elkasha\'s portfolio — WhatsApp Business Chat automation, GPS tracking, media conversion, and data analytics platforms built and deployed by Elkasha.' });
  }

  apps = [
    {
      name: 'WhatsApp Business Chat',
      url: 'https://wa.me/919971905553',
      emoji: '💬',
      category: 'Messaging & Automation',
      tagline: 'Managed WhatsApp Business Chat for Your Customers',
      description: 'A live demo of a managed WhatsApp Business Chat service built by Elkasha. Save <strong>+91 9971905553</strong> in your contacts and send <strong>"Hi"</strong> on WhatsApp — you\'ll receive an instant automated welcome message. Every subsequent message you send is counted and replied to with the running total.',
      longDesc: 'Businesses increasingly rely on WhatsApp to communicate with customers — for support, order updates, appointment reminders, and more. Elkasha can design, build, and deploy a fully customised WhatsApp Business Chat solution for your business: automated responses, conversation flows, CRM integration, and agent handoff. Contact us to discuss a setup tailored to your use case.',
      techHighlights: [
        'Instant automated responses via WhatsApp Business API',
        'Custom conversation flows and message routing',
        'Stateful sessions — tracks context across messages per user',
        'Scalable cloud backend — handles multiple concurrent chats',
        'CRM and third-party integration ready',
        'Try the live demo: save +91 9971905553 and send "Hi" on WhatsApp'
      ],
      tags: ['WhatsApp', 'Business Messaging', 'Automation', 'Cloud', 'API Integration'],
      color: '#25d366',
      screenshot: 'whatsapp-demo.png'
    },
    {
      name: 'MediaConvertZone',
      url: 'https://mediaconvertzone.com',
      emoji: '🎬',
      category: 'Media Processing',
      tagline: 'Free Online Media Conversion Platform',
      description: 'MediaConvertZone is a browser-based media conversion platform that lets users convert video, audio, and image files between popular formats — entirely in the browser, with no software installation or sign-up required.',
      longDesc: 'Built for media professionals, content creators, marketers, and everyday users, MediaConvertZone solves the frustration of dealing with incompatible file formats. Whether you need to compress a video for social media, extract audio from a clip, or convert an image to WebP for web performance — it\'s all available for free, directly in your browser.',
      techHighlights: ['Browser-based processing (no server upload)', 'Supports MP4, AVI, MOV, MP3, WAV, FLAC, JPG, PNG, WebP and more', 'Fast conversion with WebAssembly-powered engines', 'Privacy-first: your files never leave your device'],
      tags: ['Video Conversion', 'Audio Tools', 'Image Processing', 'WebAssembly', 'Free Tool'],
      color: '#7c3aed',
      screenshot: null
    },
    {
      name: 'AnalyzeBig',
      url: 'https://analyzebig.com',
      emoji: '📊',
      category: 'Data & Analytics',
      tagline: 'Big Data Analytics Made Accessible',
      description: 'AnalyzeBig is an analytics platform that helps businesses and individuals make sense of large datasets. It provides tools for data visualisation, trend analysis, and insight extraction — without needing a dedicated data engineering team.',
      longDesc: 'Many small businesses sit on goldmines of data but lack the tools or expertise to act on it. AnalyzeBig bridges that gap by offering an accessible interface for uploading, exploring, and visualising data — surfacing the insights that drive better decisions, without the complexity of enterprise BI tools.',
      techHighlights: ['Upload and analyse CSV, Excel, and JSON datasets', 'Interactive charts and visualisations', 'Statistical summaries and trend detection', 'Cloud-powered for handling large files with speed'],
      tags: ['Data Analytics', 'Visualisation', 'Business Intelligence', 'Cloud-Powered'],
      color: '#0ea5e9',
      screenshot: null
    },
    {
      name: 'Elkasha Tracking',
      url: 'https://tracking.elkasha.com',
      emoji: '📡',
      category: 'IoT & Location Services',
      tagline: 'Real-Time GPS & Device Location Tracking',
      description: 'Elkasha Tracking is a live demo of a customised GPS location tracking platform, built on Traccar — a leading open-source tracking system trusted by thousands of deployments worldwide. Anyone can register a device and track its real-time location through an intuitive web dashboard. To publish sample location data from your smartphone, use the <a href="https://www.traccar.org/client/" target="_blank" rel="noopener">Traccar Client app</a>.',
      longDesc: 'Traccar supports hundreds of GPS hardware protocols as well as mobile phones, making it one of the most versatile open-source tracking solutions available. Elkasha can deploy a fully customised, self-hosted Traccar instance for your business — whether you need fleet management, field team monitoring, asset tracking, or a branded tracking service for your own customers. Contact us to discuss a setup tailored to your scale and requirements.',
      techHighlights: [
        'Real-time location updates for multiple devices simultaneously',
        'Supports GPS hardware devices and mobile phone tracking',
        'Web dashboard with live map view and historical playback',
        'Self-hosted deployment — your data stays under your control',
        'Customisable alerts, geofences, and reporting',
        { text: 'To publish sample location data from your smartphone, use the ', linkText: 'Traccar Client app', url: 'https://www.traccar.org/client/' }
      ],
      tags: ['GPS Tracking', 'IoT', 'Fleet Management', 'Traccar', 'Real-Time', 'Self-Hosted', 'Open Source'],
      color: '#10b981',
      screenshot: null
    }
  ];
}
