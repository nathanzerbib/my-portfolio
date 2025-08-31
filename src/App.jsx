import React from "react";
import { motion } from "framer-motion";

// ============================
// QUICK SETUP (edit these only)
// ============================
const CONFIG = {
  name: "Nathan Zerbib",
  tagline: "Creator",
  spotify: {
    artistUrl: "https://open.spotify.com/artist/5XLMnBsFrJlRJG050VFU9u?si=sRmw6rPjRZGRubj5AgfXUQ",
    embedSrc: "https://open.spotify.com/embed/artist/5XLMnBsFrJlRJG050VFU9u?utm_source=generator&theme=0",
  },
  sites: [
    {
      title: "Z-SEWER",
      url: "#",
      description: "Digital-twin for sewer network.",
      logo: "/assets/Z-Sewer.png",
    },
  ],
  websites: [
    {
      title: "p a s s i o n",
      url: "https://my-portfolio-swart-ten-92.vercel.app",
      description: "An open world of expression.",
      logo: "/assets/passion.png",
    },
        {
      title: "L U L L E",
      url: "https://lulle.dev",
      description: "Your first step into coding.",
      logo: "/assets/portfoliolulle.png",
    },
  ],
  roundCards: [
    { title: "CV",     url: "/assets/ZERBIB_Nathan_resume.pdf",  subtitle: "Résumé (PDF)" },
    { title: "IELTS",  url: "/assets/ZERBIB_Nathan_IELTS.pdf",   subtitle: "Band Score (PDF)" },
    { title: "Degree", url: "/assets/Testamur.pdf",              subtitle: "Diplomas (PDF)" },
  ],
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nathan-zerbib-8bb830145" },
  ],
};


// Utility components
const SectionTitle = ({ children }) => (
  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">{children}</h2>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 dark:bg-slate-900/70 backdrop-blur border border-black/5 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${className}`}>
    {children}
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">{CONFIG.name}</h1>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">{CONFIG.tagline}</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              {CONFIG.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-neutral-300/80 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.label === "LinkedIn" ? (
                    <img src="/assets/Linkedin.png" alt="LinkedIn" className="h-5 w-5" />
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {/* About Me (PDFs) — en premier */}
        <section>
          <SectionTitle>About Me</SectionTitle>
          <div className="flex flex-wrap gap-6 justify-center">
            {CONFIG.roundCards.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group"
              >
                <div className="relative h-40 w-40 rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-semibold">{c.title}</div>
                    <div className="text-xs text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                      {c.subtitle}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Open Source — ensuite */}
        <section>
          <SectionTitle>Open Source</SectionTitle>
          <div className="grid grid-cols-1 gap-4">
            {CONFIG.sites.map((s, i) => (
              <motion.a
                key={s.title}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Card className="p-4">
                  <div className="flex items-center gap-4">
                    {s.logo ? (
                      <img
                        src={s.logo}
                        alt="Z-SEWER"
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 text-xs">
                        LOGO
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold">{s.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{s.description}</p>
                    </div>
                    <div className="hidden sm:block text-sm opacity-70">Visit ↗</div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </section>

{/* Websites — ensuite */}
<section>
  <SectionTitle>Website</SectionTitle>
  <div className="grid grid-cols-1 gap-4">
    {CONFIG.websites.map((s, i) => (
      <motion.a
        key={s.title}
        href={s.url}
        target="_blank"
        rel="noreferrer"
        className="block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: i * 0.05 }}
      >
        <Card className="p-4">
          <div className="flex items-center gap-4">
            {s.logo ? (
              <img
                src={s.logo}
                alt={s.title}
                className="h-16 w-16 rounded-xl object-cover"
              />
            ) : (
              <div className="h-16 w-16 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 text-xs">
                LOGO
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{s.description}</p>
            </div>
            <div className="hidden sm:block text-sm opacity-70">Visit ↗</div>
          </div>
        </Card>
      </motion.a>
    ))}
  </div>
</section>


        {/* Hobby • Music (Spotify en rectangle) — en bas */}
        <section id="hobby">
          <SectionTitle>Hobby • Music</SectionTitle>
          <Card className="p-4">
           <Card className="p-4">
  <iframe
    title="Spotify Artist"
    src={CONFIG.spotify.embedSrc}
    className="w-full rounded-xl"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    allowFullScreen
    loading="lazy"
  ></iframe>
</Card>

          </Card>
        </section>

        {/* Footer */}
        <footer className="pt-6 text-xs text-neutral-500 text-center">
  <p>
    © {new Date().getFullYear()} {CONFIG.name}. To be or not to be, that, is the question.
  </p>
</footer>
      </main>
    </div>
  );
}
