import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">Imantha Ahangama</h3>
            <p className="text-gray-400 text-sm">
              Machine Learning Engineering Lead specializing in MLOps, cloud architecture, 
              and explainable AI. Building production ML systems that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#education" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="/#experience" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#stack" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="/#achievements" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/#articles" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="/#astro" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Astrophotography
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/a-Imantha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/imanthaahangama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:imantha.ahangama@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Imantha Ahangama. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with Next.js, TypeScript, TailwindCSS & MDX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

