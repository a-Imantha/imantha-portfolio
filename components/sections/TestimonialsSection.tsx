'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { Award, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  type: 'award' | 'testimonial';
  name: string;
  title: string;
  company: string;
  image: string;
  text: string;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      type: 'testimonial',
      name: 'Dulani Meedeniya',
      title: 'Professor in Computer Science and Engineering',
      company: 'University of Moratuwa',
      image: '/images/testimonials/dulani-meedeniya.jpeg',
      text: 'Imantha Ahangama was an outstanding MSc student under my supervision at University of Moratuwa, where he excelled in his research in the domain of Eco-Sustainable Informatics. His ability to grasp complex concepts in deep learning and multimodal data analysis, combined with strong analytical reasoning, led to innovative solutions that pushed the project\'s boundaries. He lead publication in a prestigious Q1-ranked journal: "Explainable Image Segmentation for Spatio-Temporal and Multivariate Image Data in Precipitation Nowcasting", a testament to his mastery of deep learning, multimodal analysis, and explainable AI techniques that advanced weather data screening. What impressed me most was Imantha\'s unwavering motivation and perseverance through research challenges. With these qualities, he won the "Best Solution Addressing National Disasters" award at the National ICT Awards - NBQSA 2024, delivering high-quality, publishable results. Wishing you continued success and groundbreaking achievements ahead!',
    },
    {
      type: 'testimonial',
      name: 'Kristen Chan',
      title: 'Author | Product Design Consultant',
      company: '',
      image: '/images/testimonials/kristen-chan.jpeg',
      text: 'I had the pleasure of working closely with Imantha at CML Insight, and I can confidently say he is an exceptional Engineering Lead. Imantha was my go-to partner on every project. I relied on his deep technical expertise, fast turnaround on questions, and clear explanations of data pipelines and system design. He set a high bar for engineering rigor by establishing documented best practices across model development, progress tracking, deployment, and monitoring, all while moving quickly and delivering real business impact. Despite working across time zones and countries, collaboration was seamless thanks to his consistent availability during overlapping hours. As a leader, Imantha is thoughtful, decisive, and highly effective. I\'ve seen him work with more junior engineers with clarity and empathy, fostering a strong culture of ownership and continuous learning. He balances short-term execution with long-term architectural thinking, and his guidance consistently elevated both the technical quality of our projects and the confidence of the team delivering them. What truly sets Imantha apart is his ability to bridge data science, engineering, and product. He asks the right questions, constructively challenges assumptions, and ensures that all proposed solutions are not only technically sound but also aligned with user needs and business goals. Any organization would be fortunate to have Imantha leading their machine learning efforts. I would gladly work with him again and recommend him without hesitation.',
    },
    {
      type: 'testimonial',
      name: 'Harry Manoharan',
      title: 'Co-Founder & CEO',
      company: 'Iconique',
      image: '/images/testimonials/harry-manoharan.jpeg',
      text: 'I got the opportunity to work with Imantha in couple of projects in IFS Aerospace and Defense, and I can assure that he is a highly dedicated and committed colleague. He has the ability to look at problems from a different perspective and share better solutions to them. I have seen his full dedication to the tasks that he receive and he completes them on time. Within the short period of working together, he became the person whom I assign critical tasks to, since I knew he would get it done in the best possible way and on time. I highly recommend Imantha to any software development team.',
    },
    {
      type: 'testimonial',
      name: 'Chamika Fonseka',
      title: 'Principal Software Engineer',
      company: 'IFS',
      image: '/images/testimonials/chamika-fonseka.jpg',
      text: 'Imantha joined to my team as a fresh graduate. As the team leader of his first development team, Imantha was recognized as a very dynamic, responsible, and talented person. Whatever the challenge task assigned to him, he accepted it very positive manner and completed very efficiently with good quality as well. Even though he was a fresh graduate, he managed to complete his work with less guidance. So, I was very confident when assigning tasks to him. He is a very good team player as well. He always willing to help the team-mates and share the knowledge. I noticed his analytical skills through out the work we did together. He is capable of thinking, different solutions according to the situation. He is a very friendly and respectable person too. With the above qualities, I have no hesitation to recommend Imantha',
    },
    {
      type: 'testimonial',
      name: 'Malshani Hasanthika',
      title: 'Lead/Senior Technical Consultant',
      company: 'IFS',
      image: '/images/testimonials/malshani-hasanthika.jpeg',
      text: 'Imantha was a friendly teammate with a good spirit. Fast learner and really competent with his work. He has new innovative ideas and could analyze, solve many problems by his own. Not as a fresh graduate he always showed his talents and competencies as an experienced individual. As a mentor and a senior colleague I just gave him proper guidance and he always took the responsibility and drove the work he was assigned. Due to above reasons I can recommend Imantha for anyone without any doubt.',
    },
    {
      type: 'award',
      name: 'Gold Award Winner',
      title: 'National ICT Awards 2024',
      company: 'Solutions Addressing National Disasters - Student Category',
      image: '/images/awards/gold-award.jpg',
      text: 'Awarded for innovative research in Explainable AI for Precipitation Nowcasting, demonstrating excellence in applying machine learning to address critical national challenges in disaster management and weather prediction.',
    },
  ];

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <Section
      id="testimonials"
      title="Awards & Testimonials"
      className="bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Main Slider */}
        <div className="relative overflow-hidden border border-gray-700/50 rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4 py-8 md:px-8 md:py-12">
                {testimonial.type === 'award' ? (
                  // Award Layout - Large Image
                  <div className="flex flex-col items-center justify-center gap-6 min-h-[500px]">
                    {/* Large Award Image */}
                    <div className="relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>

                    {/* Award Content */}
                    <div className="text-center max-w-3xl">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-yellow-400" />
                        <h4 className="text-2xl md:text-3xl font-bold text-white">{testimonial.name}</h4>
                      </div>
                      <p className="text-blue-400 font-semibold text-lg mb-2">{testimonial.title}</p>
                      <p className="text-gray-400 text-sm mb-4">{testimonial.company}</p>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Testimonial Layout - Circular Profile Image
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto min-h-[500px]">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-lg shadow-blue-500/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="w-8 h-8 text-blue-400/30 mb-4 mx-auto md:mx-0" />

                      {/* Text */}
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                        <p className="text-blue-400 font-medium">{testimonial.title}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 border border-gray-600 transition-all hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 border border-gray-600 transition-all hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
          >
            {isAutoPlaying ? '⏸ Pause auto-play' : '▶ Resume auto-play'}
          </button>
        </div>
      </div>
    </Section>
  );
}

