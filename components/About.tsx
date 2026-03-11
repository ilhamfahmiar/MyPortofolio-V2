export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Get to know me</p>
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-700 mb-6 font-medium">
              Graduate with a degree in Computer Engineering. Throughout my
              academic journey, I have developed a strong foundation in both
              computer hardware and software.
            </p>
            <p className="text-gray-600 mb-6">
              My expertise spans across multiple domains including UI/UX Design,
              Web Development, Android Development, Augmented Reality, Machine
              Learning, and Computer Networking. I'm passionate about creating
              user-centered designs and building innovative solutions that solve
              real-world problems.
            </p>
            <p className="text-gray-600 mb-8">
              I believe in continuous learning and staying updated with the
              latest technologies and design trends. My goal is to bridge the
              gap between design and development, creating seamless digital
              experiences.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-gradient">5+</p>
                <p className="text-sm text-gray-600 mt-2">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-gradient">20+</p>
                <p className="text-sm text-gray-600 mt-2">Projects Completed</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-gradient">10+</p>
                <p className="text-sm text-gray-600 mt-2">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
