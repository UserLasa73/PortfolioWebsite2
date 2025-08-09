export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'DietCart (E‑commerce)',
      description: 'Spring Boot + React + PostgreSQL e‑commerce prototype for healthy groceries.',
      tags: ['React', 'Spring Boot', 'Postgres'],
      demo: '#',
      repo: '#'
    },
    {
      id: 2,
      title: 'UNIBOND Mobile App',
      description: 'Expo + React Native alumni engagement app prototype.',
      tags: ['React Native', 'Expo', 'TypeScript'],
      demo: '#',
      repo: '#'
    },
    {
      id: 3,
      title: 'Multimedia Networking Notes',
      description: 'Study notes and visual diagrams for multimedia networking topics.',
      tags: ['Docs', 'Networking'],
      demo: '#',
      repo: '#'
    }
  ];

  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'HTML & CSS',
    'Tailwind CSS',
    'Spring Boot',
    'PostgreSQL',
    'Git'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">LK</div>
            <div>
              <h1 className="text-lg font-semibold">Lasantha Kumara</h1>
              <p className="text-xs text-gray-600">Frontend developer • UI/UX enthusiast*</p>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#contact" className="rounded-md px-3 py-2 bg-indigo-600 text-white text-sm hover:opacity-95">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hi.. I’m Lasantha. I build clean, usable web experiences.</h2>
          <p className="mt-4 text-lg text-gray-700">I’m an undergraduate IT student focused on frontend development, web design, and UI/UX. I like turning ideas into polished interfaces and learning backend systems to make complete products.</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50">See projects</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white">Say hello</a>
          </div>
        </div>
        <div className="order-first md:order-last flex items-center justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-indigo-50 to-white p-6">
            <img alt="portrait" src="/potrait2.jpeg" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      <section id="about" className="mt-16 max-w-5xl mx-auto px-6 bg-white rounded-2xl p-6 shadow-sm border">
        <h3 className="text-2xl font-semibold">About me</h3>
        <p className="mt-3 text-gray-700">I study IT with a focus on web development. I enjoy building frontend applications using React and styling them with Tailwind. I'm also learning backend development with Spring Boot and PostgreSQL. Outside coding, I like photography and product design.</p>
      </section>

      <section id="projects" className="mt-10 max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Selected projects</h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.id} className="border rounded-2xl p-4 bg-white shadow-sm">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mt-10 max-w-5xl mx-auto px-6 bg-white p-6 rounded-2xl border shadow-sm">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-10 max-w-5xl mx-auto px-6">
        <div className="bg-indigo-600 text-white rounded-2xl p-6">
          <h3 className="text-2xl font-semibold">Let’s work together</h3>
          <p className="mt-2 text-indigo-100">Have a project or an idea? I love collaborating on web and mobile apps.</p>
          <a href="mailto:youremail@example.com" className="inline-block mt-4 px-4 py-2 bg-white text-indigo-600 rounded-md">Email me</a>
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} Lasantha Kumara • Built with ❤️ using Next.js + Tailwind</footer>
    </main>
  );
}
