export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-primary font-semibold uppercase tracking-wider mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        </div>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-center">
          <div>
            <p className="text-xl text-gray-800 mb-6 font-medium leading-relaxed">
              Graduate with a degree in Computer Engineering. Throughout my
              academic journey, I have developed a strong foundation in both
              computer hardware and software.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My expertise spans across multiple domains including UI/UX Design,
              Web Development, Android Development, Augmented Reality, Machine
              Learning, and Computer Networking. I'm passionate about creating
              user-centered designs and building innovative solutions that solve
              real-world problems.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              I believe in continuous learning and staying updated with the
              latest technologies and design trends. My goal is to bridge the
              gap between design and development, creating seamless digital
              experiences.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <p className="text-5xl font-bold text-gradient mb-2">5+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <p className="text-5xl font-bold text-gradient mb-2">20+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <p className="text-5xl font-bold text-gradient mb-2">10+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full aspect-square max-w-md rounded-2xl shadow-2xl overflow-hidden">
              <div
                className="w-full h-full flex items-center justify-center text-white text-2xl font-semibold"
                style={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                }}
              >
                Your Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
