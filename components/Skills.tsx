export default function Skills() {
  const skills = [
    {
      title: "UI/UX Design",
      description:
        "Creating user-centered designs with focus on usability, accessibility, and aesthetics.",
      tools: ["Figma", "Adobe XD", "Sketch"],
    },
    {
      title: "Web Development",
      description:
        "Building responsive and performant web applications with modern technologies.",
      tools: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Android Development",
      description:
        "Developing native Android applications with clean architecture and best practices.",
      tools: ["Kotlin", "Java", "Android Studio"],
    },
    {
      title: "AR Development",
      description:
        "Creating immersive augmented reality experiences for mobile and web platforms.",
      tools: ["Unity", "ARCore", "Vuforia"],
    },
    {
      title: "Machine Learning",
      description:
        "Implementing ML models for data analysis, prediction, and intelligent systems.",
      tools: ["Python", "TensorFlow", "Scikit-learn"],
    },
    {
      title: "Computer Networking",
      description:
        "Understanding network architecture, protocols, and security implementations.",
      tools: ["TCP/IP", "Cisco", "Network Security"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">What I do</p>
          <h2 className="text-4xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 opacity-80">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
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
