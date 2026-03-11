export default function Skills() {
  const skills = [
    {
      title: "UI/UX Design",
      description:
        "Creating user-centered designs with focus on usability, accessibility, and aesthetics.",
      tools: ["Figma", "Adobe XD", "Sketch"],
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description:
        "Building responsive and performant web applications with modern technologies.",
      tools: ["React", "Next.js", "Tailwind"],
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Android Development",
      description:
        "Developing native Android applications with clean architecture and best practices.",
      tools: ["Kotlin", "Java", "Android Studio"],
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: "AR Development",
      description:
        "Creating immersive augmented reality experiences for mobile and web platforms.",
      tools: ["Unity", "ARCore", "Vuforia"],
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Machine Learning",
      description:
        "Implementing ML models for data analysis, prediction, and intelligent systems.",
      tools: ["Python", "TensorFlow", "Scikit-learn"],
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Computer Networking",
      description:
        "Understanding network architecture, protocols, and security implementations.",
      tools: ["TCP/IP", "Cisco", "Network Security"],
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="19" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <path d="M12 7v3m0 4v3m-5-5h3m4 0h3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-primary font-semibold uppercase tracking-wider mb-4">
            What I do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-250"
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-primary"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                }}
              >
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-50 text-sm text-gray-600 font-medium rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
