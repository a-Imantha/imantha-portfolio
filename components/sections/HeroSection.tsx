import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Award, GraduationCap } from 'lucide-react';
import { SiPython, SiPytorch, SiAmazon, SiGo, SiScikitlearn, SiGooglecloud, SiKubernetes, SiHuggingface } from 'react-icons/si';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase bg-blue-950/50 px-4 py-2 rounded-full border border-blue-500/20">
                ML Engineering Lead
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Imantha
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Ahangama
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              End-to-end ML solutions from data to model training to backend to frontend. Specializing in MLOps, 
              cloud architecture, and explainable AI.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400">
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm font-medium">Education</span>
              </div>
              <p className="text-2xl font-bold text-white">MSc CS</p>
              <p className="text-sm text-gray-400">GPA 3.9 • Data Science</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Recognition</span>
              </div>
              <p className="text-2xl font-bold text-white">Gold Award</p>
              <p className="text-sm text-gray-400">National ICT Awards 2024</p>
            </div>
          </div>

          {/* Current Role */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">ML Engineering Lead</h3>
                <p className="text-blue-400">Astromind</p>
              </div>
              <span className="text-xs text-gray-400">Dec 2024 - Present</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Building ML solutions for astronomical data analysis. Fine-tuning LLMs for Chandra X-ray Observatory 
              and developing RAG-based platforms with sandboxed execution environments.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiPython className="w-3.5 h-3.5" />
                Python
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiPytorch className="w-3.5 h-3.5" />
                PyTorch
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiHuggingface className="w-3.5 h-3.5" />
                Transformers
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiScikitlearn className="w-3.5 h-3.5" />
                Sklearn
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiGo className="w-3.5 h-3.5" />
                Golang
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiAmazon className="w-3.5 h-3.5" />
                AWS
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiGooglecloud className="w-3.5 h-3.5" />
                GCP
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20">
                <SiKubernetes className="w-3.5 h-3.5" />
                Kubernetes
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="mailto:imantha.ahangama@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/a-Imantha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/imanthaahangama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:imantha.ahangama@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative lg:order-last order-first">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            
            {/* Main portrait */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full" />
              <Image
                src="/images/hero-portrait.jpg"
                alt="Imantha Ahangama"
                fill
                className="object-cover rounded-full border-4 border-gray-800"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-lg font-bold text-white">5+ yrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}

