
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import EcoCityShowcase from '@/components/EcoCityShowcase';
import ProjectsGrid from '@/components/ProjectsGrid';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setShowEasterEgg(true);
      }
      if (e.key === 'Escape') {
        setShowEasterEgg(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-lg border-b border-cyber-grid">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-cyber font-bold text-neon-blue">
              Portfolio.Gu
            </div>
            <div className="hidden md:flex gap-8 font-mono">
              <a href="#home" className="text-gray-300 hover:text-neon-blue transition-colors">
                Home
              </a>
              <a href="#ecocity" className="text-gray-300 hover:text-neon-green transition-colors">
                EcoCity
              </a>
              <a href="#projects" className="text-gray-300 hover:text-neon-purple transition-colors">
                Projetos
              </a>
              <a href="#about" className="text-gray-300 hover:text-neon-yellow transition-colors">
                Sobre
              </a>
              <a href="#contact" className="text-gray-300 hover:text-neon-pink transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        
        <EcoCityShowcase />
        <ProjectsGrid />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-cyber-grid">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-sm space-y-2">
            <div className="text-neon-green">$ git log --oneline</div>
            <div className="text-gray-400">
              Made with ❤️ and lots of ☕ by Gustavo Alves
            </div>
            <div className="text-gray-400">
              © 2024 - Construindo o futuro com cloud computing, uma linha de código por vez
            </div>
          </div>
        </div>
      </footer>

      {/* Easter Egg Terminal */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="terminal-window w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm">secret-terminal.sh</span>
              <button
                onClick={() => setShowEasterEgg(false)}
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="font-mono text-sm space-y-2">
              <div className="text-neon-green">$ whoami</div>
              <div className="text-white">Gustavo Alves - Cloud Architect & Sustainability Enthusiast</div>
              
              <div className="text-neon-blue">$ cat fun-facts.json</div>
              <div className="text-gray-300 pl-4">
                {JSON.stringify({
                  "age": "17 years",
                  "education": "SENAI - Análise e Desenvolvimento de Sistemas",
                  "achievement": "10º lugar SPSkills Cloud Computing",
                  "projects_created": "EcoCity + others",
                  "favorite_tech": ["Cloud", "AWS", "TypeScript", "Kotlin"],
                  "super_power": "turning coffee into cloud solutions",
                  "motto": "Building sustainable future with cloud computing"
                }, null, 2)}
              </div>
              
              <div className="text-neon-purple">$ echo $PHILOSOPHY</div>
              <div className="text-gray-300">
                "Technology should serve humanity and preserve our planet through cloud innovation"
              </div>
              
              <div className="text-neon-yellow">$ history | tail -5</div>
              <div className="text-gray-400 space-y-1">
                <div>aws deploy --project ecocity</div>
                <div>npm run build:sustainable-future</div>
                <div>kotlin compile mobile-app</div>
                <div>git commit -m "SPSkills competition ready"</div>
                <div>firebase deploy --eco-features</div>
              </div>
              
              <div className="text-neon-green animate-pulse">$ █</div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-cyber-grid z-50">
        <div 
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green transition-all duration-300"
          style={{
            width: `${Math.min(100, (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
    </div>
  );
};

export default Index;
