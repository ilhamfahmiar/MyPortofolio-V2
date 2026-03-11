"use client";

import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-commerce App Redesign",
      description: "Redesigned checkout flow reducing cart abandonment by 45%",
      category: "uiux",
      tags: ["UI/UX", "Mobile"],
    },
    {
      title: "SaaS Dashboard",
      description:
        "Modern analytics dashboard with real-time data visualization",
      category: "web",
      tags: ["Web", "React"],
    },
    {
      title: "Fitness Tracking App",
      description:
        "Native Android app for workout tracking and health monitoring",
      category: "mobile",
      tags: ["Android", "Kotlin"],
    },
    {
      title: "AR Furniture Viewer",
      description:
        "Augmented reality app for visualizing furniture in real spaces",
      category: "ar",
      tags: ["AR", "Unity"],
    },
    {
      title: "Design System",
      description: "Comprehensive design system for enterprise product suite",
      category: "uiux",
      tags: ["UI/UX", "Design System"],
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website with smooth animations and interactions",
      category: "web",
      tags: ["Web", "Next.js"],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">My work</p>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "uiux", "web", "mobile", "ar"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                filter === category
                  ? "btn-gradient text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category === "all" ? "All" : category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-secondary opacity-80"></div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-primary font-semibold hover:underline">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
