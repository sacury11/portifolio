import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") setDarkMode(true);

    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const Section = ({ id, children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
        {children}
      </motion.section>
    );
  };

  const parallax = Math.min(scrollY / 6, 40);

  return (
    <div className="font-sans bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrollY > 60
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-indigo-600">
            Oybek Ilhomboyev
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#education" className="hover:text-indigo-600">Education</a>
            <a href="#certificates" className="hover:text-indigo-600">Certificates</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="/Oybek_Ilhomboyev_CV.pdf" download className="hover:text-indigo-600 font-medium">Download CV</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-110 transition"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-indigo-600">Oybek Ilhomboyev</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-md">
            Python • SQL • Power BI — I build data-driven tools and dashboards.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-4 py-2 border rounded-lg shadow hover:bg-indigo-50 dark:hover:bg-slate-800">See Projects</a>
            <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-0 flex items-center justify-center"
          style={{ transform: `translateY(${parallax}px)` }}
        >
          <div className="absolute w-80 h-80 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30 transform -translate-y-6"></div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-4 rounded-3xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl border border-white/20 shadow-2xl"
            style={{ minWidth: 224 }}
          >
            <img
              src="/profile.png"
              alt="Oybek Ilhomboyev profile"
              className="w-56 h-56 object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            I’m 17 years old, passionate about programming and data. I work with Python to process and analyze data, SQL for querying, and Power BI for creating impactful dashboards.
          </p>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="mt-6 grid grid-cols-2 gap-4">
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow">Python</li>
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow">SQL</li>
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow">Power BI</li>
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow">English</li>
          </ul>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            <strong>Data Analyst (2 years)</strong> — Worked on multiple real-world projects including:
          </p>
          <ul className="list-disc list-inside mt-3 text-slate-700 dark:text-slate-300">
            <li>Banking analytics</li>
            <li>Bike store performance dashboard</li>
            <li>Academy Talents Program projects</li>
          </ul>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
            <li><strong>11th Grade Student</strong> — currently studying</li>
            <li><strong>MAAB Academy</strong> — Successfully completed Data Analyst course</li>
          </ul>
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Certificates</h2>
          <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
            <li><strong>MAAB Academy</strong> — Data Analyst Certificate</li>
            <li><strong>IELTS 7.5 Overall</strong> (L: 7.5, R: 7.5, W: 7.0, S: 8.5)</li>
            <li>Additional certificates and tool summaries listed in CV</li>
          </ul>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-medium">Sales Dashboard</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Interactive Power BI dashboard analyzing sales performance.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-medium">Python Automation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Script to clean and prepare large datasets efficiently.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-medium">SQL Reporting</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Optimized SQL queries for analytical reporting.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <p className="mt-2 opacity-90">Feel free to reach out for collaborations or inquiries.</p>
          <div className="mt-6 space-y-3">
            <a href="tel:+998888251808" className="block text-lg">📞 (+998) 88 825 18 08</a>
            <a
              href="https://t.me/probably_nobody"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-lg hover:text-indigo-300 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="w-5 h-5 fill-current">
                <path d="M120 0C53.73 0 0 53.73 0 120c0 66.27 53.73 120 120 120s120-53.73 120-120C240 53.73 186.27 0 120 0zM178.3 82.24l-22.62 106.52c-1.71 7.57-6.25 9.42-12.64 5.87l-35-25.8-16.9 16.28c-1.87 1.87-3.43 3.43-7.05 3.43l2.52-35.53 64.63-58.33c2.82-2.52-.61-3.91-4.39-1.39l-79.82 50.27-34.38-10.73c-7.47-2.34-7.64-7.47 1.56-11.07l134.4-51.76c6.22-2.27 11.64 1.39 9.62 11.15z"/>
              </svg>
              💬 See Profile
            </a>
            <a href="mailto:oyekilhomboyev7@gmail.com" className="block text-lg">✉️ oyekilhomboyev7@gmail.com</a>
          </div>
          <a
            href="/Oybek_Ilhomboyev_CV.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-white dark:bg-slate-800 text-indigo-600 rounded-lg shadow hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            Download CV
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="text-center text-slate-500 dark:text-slate-400 text-sm py-6">
        © {new Date().getFullYear()} Oybek Ilhomboyev — Built with React & Tailwind
      </footer>
    </div>
  );
}
