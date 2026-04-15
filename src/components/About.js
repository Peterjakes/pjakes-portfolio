
export default function About() {
  return (
    <section id="about" className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

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
          
            ,<a href="/resume-peter-jakes.pdf"
            download
            className="mt-6 inline-block rounded-lg border border-zinc-700 bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}