import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Portfolio — Elkasha | Live Apps We\'ve Built');
    this.meta.updateTag({ name: 'description', content: 'Explore Elkasha\'s portfolio of live web applications — including MediaConvertZone, a free online media conversion platform, and AnalyzeBig, a big data analytics tool.' });
  }

  apps = [
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
      color: '#7c3aed'
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
      color: '#0ea5e9'
    }
  ];
}
