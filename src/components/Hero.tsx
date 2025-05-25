
import { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const texts = [
    'Cloud Developer',
    'Sustainability Tech Enthusiast', 
    'EcoCity Creator',
    'AWS Specialist',
    'Future Builder'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, texts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Glitch Name Effect */}
          <div className="relative">
            <h1 
              className="text-6xl md:text-8xl font-cyber font-black text-white glitch-text relative"
              data-text="Gustavo Alves"
            >
              Gustavo Alves
            </h1>
            <div className="absolute inset-0 text-6xl md:text-8xl font-cyber font-black text-neon-blue opacity-20 blur-sm">
              Gustavo Alves
            </div>
          </div>

          {/* Typing Animation */}
          <div className="text-2xl md:text-4xl font-mono h-16 flex items-center justify-center">
            <span className="text-neon-green">{'>'} </span>
            <span className="text-white">{displayText}</span>
            <span className={`text-neon-blue text-3xl ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              |
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transformando ideias em{' '}
            <span className="text-neon-blue neon-text">soluções cloud sustentáveis</span>{' '}
            para um futuro melhor. Especialista em AWS, TypeScript e Cloud Computing.
            <br />
            <span className="text-neon-green">🏆 10º lugar na Olimpíada de Cloud SPSkills</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="neon-border bg-transparent hover:bg-neon-blue/10 transition-all duration-300 group"
              asChild
            >
              <a href="https://github.com/gualvesx" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:text-neon-blue transition-colors" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="neon-border bg-transparent hover:bg-neon-purple/10 transition-all duration-300 group"
              asChild
            >
              <a href="https://www.linkedin.com/in/gustavo-alves-761874362/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:text-neon-purple transition-colors" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="neon-border bg-transparent hover:bg-neon-pink/10 transition-all duration-300 group"
              asChild
            >
              <a href="https://instagram.com/guh.alvxs" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2 group-hover:text-neon-pink transition-colors" />
                Instagram
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 animate-glow-pulse"
            >
              Explore EcoCity
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Terminal Command Preview */}
      <div className="absolute bottom-8 left-8 terminal-window p-4 w-80 hidden md:block">
        <div className="flex items-center mb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-sm ml-4">terminal</span>
        </div>
        <div className="text-neon-green text-sm space-y-1">
          <div>{'>'} aws configure</div>
          <div>{'>'} npm run dev</div>
          <div>{'>'} echo "Portfolio.Gu - Cloud Solutions"</div>
          <div className="text-neon-blue animate-pulse">{'>'} exploring cloud projects...</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
