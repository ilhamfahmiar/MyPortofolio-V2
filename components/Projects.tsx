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
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-primary font-semibold uppercase tracking-wider mb-4">
            My work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { value: "all", label: "All" },
            { value: "uiux", label: "UI/UX" },
            { value: "web", label: "Web" },
            { value: "mobile", label: "Mobile" },
            { value: "ar", label: "AR" },
          ].map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                filter === category.value
                  ? "bg-primary text-white border-2 border-primary"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-primary hover:text-white hover:border-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-250 group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-xl font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                  }}
                >
                  Project Image
                </div>
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                  <a
                    href="#"
                    className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition transform translate-y-4 group-hover:translate-y-0 duration-250"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-50 text-primary text-xs font-bold uppercase tracking-wide rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-[15px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
