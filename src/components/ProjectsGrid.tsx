
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
  category: string;
}

const ProjectsGrid = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Neural Finance',
      description: 'Plataforma de análise financeira com IA para predição de mercado e otimização de portfólio.',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: 'https://neural-finance.com',
      category: 'AI'
    },
    {
      id: 2,
      title: 'CryptoTracker Pro',
      description: 'Dashboard em tempo real para tracking de criptomoedas com alertas personalizados.',
      technologies: ['Vue.js', 'Node.js', 'WebSocket', 'Chart.js'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: 'https://cryptotracker.com',
      category: 'Web'
    },
    {
      id: 3,
      title: 'SmartHome IoT',
      description: 'Sistema completo de automação residencial com controle via app e comandos de voz.',
      technologies: ['Arduino', 'React Native', 'MQTT', 'Firebase'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: 'https://smarthome.com',
      category: 'Web'
    },
    {
      id: 4,
      title: 'CodeMentor AI',
      description: 'Assistente de programação com IA para code review e sugestões de otimização.',
      technologies: ['Python', 'OpenAI', 'Docker', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      category: 'AI'
    },
    {
      id: 5,
      title: 'EcoTransport',
      description: 'App de mobilidade urbana sustentável com rotas otimizadas e pegada de carbono.',
      technologies: ['React Native', 'Google Maps', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: 'https://ecotransport.com',
      category: 'Web'
    },
    {
      id: 6,
      title: 'CloudWatch Dashboard',
      description: 'Sistema de monitoramento cloud com métricas em tempo real e alertas automáticos.',
      technologies: ['AWS', 'TypeScript', 'CloudWatch', 'Lambda'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      demo: 'https://cloudwatch.com',
      category: 'AI'
    }
  ];

  const filters = ['all', 'AI', 'Web'];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-white mb-4">
            <span className="text-neon-purple">{'<'}</span>
            <span className="text-white mx-4">Outros Projetos</span>
            <span className="text-neon-purple">{' />'}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className={`
                ${selectedFilter === filter 
                  ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-black' 
                  : 'neon-border bg-transparent hover:bg-neon-purple/10'
                }
                transition-all duration-300 capitalize
              `}
            >
              {filter === 'all' ? 'Todos' : filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="terminal-window group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <div className="text-6xl font-cyber font-bold text-white/20">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" className="flex-1 text-xs bg-neon-blue text-black" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ArrowRight className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-cyber font-bold text-neon-blue">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="text-neon-green border-neon-green">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-cyber-grid text-neon-yellow hover:bg-neon-yellow/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Terminal Style Footer */}
                <div className="border-t border-cyber-grid pt-3 font-mono text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-neon-green">$</span>
                    <span>git status</span>
                    <span className="text-neon-blue ml-auto">✓ production ready</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            href="https://github.com/gualvesx"
            variant="outline"
            size="lg"
            className="neon-border bg-transparent hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-purple hover:text-black transition-all duration-300"
          >
            Ver Mais Projetos no GitHub
            <Github className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
