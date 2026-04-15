
export default function About() {
  // Stats data 
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Happy Clients', value: '15+' },
  ];

  return (
    <section id="about" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
            About Me
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Developer. Designer. Creator.
          </h2>

          {/* Bio paragraphs */}
          <div className="space-y-4 text-zinc-400 leading-relaxed max-w-3xl">
            <p>
              {`I'm Peter Jakes, a full stack software engineer and graphic designer who thrives at the intersection of code and creativity. I build robust, scalable applications using React, Node.js, Laravel, and Flutter, while also crafting visually compelling designs with Adobe Illustrator and Photoshop.`}
            </p>
            <p>
              {`Whether it's architecting a RESTful API, building a responsive React frontend, or designing a brand identity from scratch, I bring the same attention to detail and passion for quality to every project.`}
            </p>
          </div>

          {/* CV download button */}
          
            <a href="/resume-peter-jakes.pdf"
            download
            className="mt-6 inline-block rounded-lg border border-zinc-700 bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Download CV
          </a>
        </div>

        {/* Stats grid — 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6"
            >
              {/* Stat number */}
              <div className="mb-1 text-3xl font-bold text-zinc-100">{stat.value}</div>
              {/* Stat label */}
              <div className="text-xs sm:text-sm font-medium text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}