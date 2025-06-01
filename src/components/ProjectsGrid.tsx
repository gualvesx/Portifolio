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
      title: 'EcoCity',
      description: 'Plataforma revolucionária para cidades inteligentes e sustentáveis, integrando Cloud Computing e tecnologias IoT.',
      technologies: ['Firebase', 'TypeScript', 'React', 'AWS'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/gualvesx/EcoCity',
      demo: 'https://ecocity-801cc.web.app/',
      category: 'Web'
    },
    {
      id: 2,
      title: 'SustenTech',
      description: 'Aplicação focada em sustentabilidade e tecnologia verde para monitoramento ambiental.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/gualvesx/SustenTech',
      category: 'Web'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Conjunto de soluções cloud para otimização de recursos e infraestrutura sustentável.',
      technologies: ['AWS', 'Lambda', 'CloudWatch', 'S3'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/gualvesx',
      category: 'Cloud'
    },
    {
      id: 4,
      title: 'IoT Green Monitor',
      description: 'Sistema de monitoramento IoT para plantas e jardins inteligentes com alertas automáticos.',
      technologies: ['Arduino', 'React Native', 'MQTT', 'Firebase'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/gualvesx',
      category: 'IoT'
    },
    {
      id: 5,
      title: 'API Gateway',
      description: 'Gateway de APIs para microserviços com autenticação e rate limiting.',
      technologies: ['Node.js', 'Express', 'JWT', 'Redis'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/gualvesx',
      category: 'Web'
    },
    {
      id: 6,
      title: 'Mobile Sustainability',
      description: 'App mobile para acompanhamento de práticas sustentáveis e pegada de carbono.',
      technologies: ['Kotlin', 'Android', 'Firebase', 'Google Maps'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/gualvesx',
      category: 'Mobile'
    }
  ];

  const filters = ['all', 'Web', 'Cloud', 'IoT', 'Mobile'];

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
