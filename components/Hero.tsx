export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative"
      style={{
        background:
          "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left">
            <span className="inline-block text-base text-primary font-semibold mb-4">
              Hi, I'm
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
              Fahmi AR
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              UI/UX Designer & Developer
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-xl">
              Computer Engineering graduate specializing in UI/UX Design, Web
              Development, and emerging technologies like AR and Machine
              Learning.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#projects"
                className="btn-gradient px-8 py-3.5 rounded-lg font-semibold inline-block"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center slide-in-right">
            <div className="w-full max-w-md aspect-square pulse-animation">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle cx="100" cy="100" r="90" fill="#667eea" opacity="0.1" />
                <circle cx="100" cy="100" r="70" fill="#764ba2" opacity="0.1" />
                <circle cx="100" cy="100" r="50" fill="#667eea" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 md:flex flex-col items-center gap-2 text-gray-500 text-sm hidden">
        <span>Scroll Down</span>
        <div
          className="w-5 h-5 border-r-2 border-b-2 border-primary"
          style={{ transform: "rotate(45deg)" }}
        ></div>
      </div>
    </section>
  );
}
