import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { GithubExplorerSection } from './sections/GithubExplorerSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { JourneySection } from './sections/JourneySection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { useGithubRepos } from './hooks/useGithubRepos';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const shouldReduceMotion = useReducedMotion();

  const {
    filteredRepos,
    featuredProjects,
    loading,
    source,
    rateLimited,
    error,
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    totalReposCount,
  } = useGithubRepos();

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sectionIds = ['hero', 'work', 'about', 'skills', 'journey', 'github-explorer', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-[#F2F0EB] flex flex-col font-sans selection:bg-[#C5F467] selection:text-[#101010]">
      {/* Sticky Editorial Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections with Motion Wrappers */}
      <main className="flex-1 w-full" id="main-content">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroSection />
        </motion.div>

        <ProjectsSection projects={featuredProjects} />

        <AboutSection />

        <SkillsSection />

        <JourneySection />

        <GithubExplorerSection
          repos={filteredRepos}
          loading={loading}
          source={source}
          rateLimited={rateLimited}
          error={error}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalCount={totalReposCount}
        />

        <ContactSection />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
