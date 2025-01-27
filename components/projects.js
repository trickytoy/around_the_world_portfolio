"use client"
import { HoverEffect } from "@/components/ui/hover-effect"

const projects = [
    {
      title: "Blend",
      description:
        "An interactive platform designed to empower UNSW Computer Science students by mapping all COMP courses offered at the university. Categorizes courses into domains such as Software Fundamentals, AI, and Infrastructure, helping students visualize their academic journey and explore pathways to achieve their career goals",
      link: "https://course-visualiser-v4.vercel.app/",
    },
    {
      title: "ISM Semantic Search",
      description:
        "Built an NLP-based semantic search engine for the Information Security Manual (ISM) to help users find relevant security controls more effectively. Collaborated with cybersecurity engineers to refine user requirements, resulting in a more intuitive interface tailored to user pain points.",
      link: "https://ism-search.vercel.app/",
    },
    {
      title: "Generative AI for Meal Planner App",
      description:
        "Developed a full-stack web app using React, Express, PostgreSQL, and the OpenAI GPT API to generate personalized meal plans based on user preferences and dietary restrictions.",
      link: "https://github.com/trickytoy/WhatToEat",
    },
  ];
  

export function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

