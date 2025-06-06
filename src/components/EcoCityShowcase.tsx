
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from 'lucide-react';

const EcoCityShowcase = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const technologies = [
    { name: 'Cloud', color: 'text-neon-blue' },
    { name: 'AWS', color: 'text-neon-green' },
    { name: 'Firebase', color: 'text-neon-purple' },
    { name: 'TypeScript', color: 'text-neon-yellow' },
    { name: 'JSX', color: 'text-neon-pink' },
    { name: 'Vite', color: 'text-neon-purple' },
    { name: 'TailwindCSS', color: 'text-neon-yellow' },
    { name: 'Node.js', color: 'text-neon-pink' }
  ];

  const challenges = [
    {
      command: '$ aws deploy --sustainability',
      solution: 'Implementação de arquitetura cloud para monitoramento sustentável'
    },
    {
      command: '$ firebase deploy --eco-features',
      solution: 'Algoritmos de otimização energética com cloud functions'
    },
    {
      command: '$ kotlin build --smart-city',
      solution: 'Aplicativo mobile para gerenciar dispositivos IoT da cidade'
    }
  ];

  return (
    <section id="ecocity" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-white mb-4">
            <span className="text-neon-green">EcoCity</span>
            <span className="text-neon-blue ml-4">Project</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Uma plataforma revolucionária para cidades inteligentes e sustentáveis, 
            integrando Cloud Computing, Leaflet (Mapa Open Source) e Tecnologias para otimizar recursos urbanos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Preview */}
          <div className="relative">
            <div className="terminal-window p-6 h-96 overflow-hidden relative group">
              {/* Video Preview */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/khqovYBbZVU?si=61ABYEoOhntkBMKf"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <Button 
                    size="sm" 
                    className="w-full bg-neon-blue text-black hover:bg-neon-green transition-colors"
                  >
                    EcoCity
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                className="neon-border bg-transparent hover:bg-neon-blue/10 flex-1"
                asChild
              >
                <a href="https://github.com/gualvesx/EcoCity" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Código Fonte
                </a>
              </Button>
              <Button
                className="bg-gradient-to-r from-neon-green to-neon-blue text-black hover:from-neon-blue hover:to-neon-purple flex-1 animate-glitch"
                asChild
              >
                <a href="https://ecocity-801cc.web.app/" target="_blank" rel="noopener noreferrer">
                  Acessar Site
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-4">
                {'<'} Tecnologias {' />'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`${tech.color} border-current hover:bg-current/10 transition-colors cursor-pointer`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div>
              <h3 className="text-2xl font-cyber font-bold text-neon-purple mb-4">
                Desafios & Soluções
              </h3>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <div key={index} className="code-block p-4 rounded-lg">
                    <div className="text-neon-green font-mono text-sm mb-2">
                      {item.command}
                    </div>
                    <div className="text-gray-300 text-sm pl-4 border-l-2 border-neon-blue/30">
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expandable Details */}
            <div>
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-neon-blue hover:text-neon-green transition-colors p-0"
              >
                {isExpanded ? '[-] Menos detalhes' : '[+] Mais detalhes'}
              </Button>
              
              {isExpanded && (
                <div className="mt-4 space-y-4 animate-fade-in">
                  <div className="terminal-window p-4">
                    <h4 className="text-neon-yellow font-mono mb-2">📊 Impacto:</h4>
                    <ul className="text-sm text-gray-300 space-y-1 font-mono">
                      <li>• Auxilio nos diversos discartes</li>
                      <li>• Cidade Sustentável</li>
                      <li>• Mapa Ecológico</li>
                      <li>• Fácil acesso a Eventos</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoCityShowcase;
