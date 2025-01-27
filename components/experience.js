"use client"
import { GlowEffect } from '@/components/ui/glow-effect';
import { Timeline } from '@/components/ui/timeline';
import { Typewriter } from '@/components/ui/typewriter-text';

const workExperiences = [
  {
    id: "1",
    company: "CAE",
    position: "Engineering Intern",
    date: "December 2023 - December 2024",
    achievements: [
      "Developed a Python-based tool for automating version comparisons of the Information Security Manual (ISM), reducing update process time from over a week to under 5 hours.",
      "Collaborated with the cybersecurity team to create a Semantic Search for ISM using machine learning and NLP techniques, built with Hugging Face and Next.js.",
      "Enhanced the cyber team's ability to search and implement security controls, improving audit efficiency and policy implementation speed.",
    ],
  },
  {
    id: "2",
    company: "CodeCamp",
    position: "Code Tutor",
    date: "May 2023 - August 2023",
    achievements: [
      "Taught programming fundamentals to kids using an internally developed programming interface.",
      "Communicated concepts in an engaging and accessible manner, improving students' understanding and enthusiasm for programming.",
    ],
  },
]
export function Experience() {
  return (
<div className='relative'>
      <div className='relative rounded-lg bg-black p-2 text-white dark:bg-white dark:text-black'>
        <Timeline experiences={workExperiences} />
      </div>
    </div>
  );
}

