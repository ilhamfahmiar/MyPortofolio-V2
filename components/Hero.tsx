export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold mb-4">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Fahmi AR</h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-6">
              UI/UX Designer & Developer
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Computer Engineering graduate specializing in UI/UX Design, Web
              Development, and emerging technologies like AR and Machine
              Learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="btn-gradient px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
