
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const [selectedTimeline, setSelectedTimeline] = useState(0);

  const timeline = [
    {
      year: '2023',
      title: 'Início dos Estudos no SENAI',
      description: 'Comecei o curso de Análise e Desenvolvimento de Sistemas no SENAI, iniciando minha jornada na programação.',
      icon: '🎓',
      tech: ['HTML', 'CSS', 'JavaScript', 'Fundamentos']
    },
    {
      year: '2023',
      title: 'Entrada na Olimpíada SPSkills',
      description: 'Participei da olimpíada de cloud do SPSkills modalidade 53, com workshops preparatórios até novembro.',
      icon: '🏆',
      tech: ['Cloud Computing', 'AWS', 'Workshops', 'Competição']
    },
    {
      year: '2023',
      title: '10º Lugar no Estadual',
      description: 'Conquistei a 10ª posição no estadual da olimpíada de cloud, demonstrando meu conhecimento em tecnologias cloud.',
      icon: '🥉',
      tech: ['AWS', 'Cloud Architecture', 'Problem Solving', 'Performance']
    },
    {
      year: '2024',
      title: 'Continuação na Olimpíada',
      description: 'Continuei participando da olimpíada em 2024, aprimorando ainda mais minhas habilidades em cloud computing.',
      icon: '☁️',
      tech: ['Advanced Cloud', 'AWS Services', 'DevOps', 'Automation']
    },
    {
      year: '2024',
      title: 'Criação do EcoCity',
      description: 'Iniciei o desenvolvimento do projeto EcoCity, uma plataforma sustentável para cidades inteligentes.',
      icon: '🌱',
      tech: ['TypeScript', 'Kotlin', 'Firebase', 'Sustainability']
    }
  ];

  const skills = [
    { category: 'Cloud', items: ['AWS', 'Firebase', 'Cloud Architecture', 'DevOps'], color: 'text-neon-blue' },
    { category: 'Frontend', items: ['TypeScript', 'JSX', 'SCSS', 'TailwindCSS'], color: 'text-neon-green' },
    { category: 'Backend', items: ['Node.js', 'Kotlin', 'APIs', 'Databases'], color: 'text-neon-purple' },
    { category: 'Tools', items: ['Vite', 'Git', 'Docker', 'VS Code'], color: 'text-neon-yellow' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-white mb-4">
            <span className="text-neon-yellow">{'{'}</span>
            <span className="text-white mx-4">Sobre Mim</span>
            <span className="text-neon-yellow">{'}'}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-yellow to-neon-green mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Avatar & Bio */}
          <div className="space-y-8">
            {/* 3D Avatar Placeholder */}
            <div className="relative mx-auto w-64 h-64">
              <div className="w-full h-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-green rounded-full flex items-center justify-center relative overflow-hidden group">
                <div className="text-8xl font-cyber font-bold text-white animate-float">
                  GA
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 group-hover:to-white/20 transition-all duration-300"></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-20 animate-pulse"></div>
            </div>

            {/* Bio Text */}
            <div className="terminal-window p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">about.md</span>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="font-mono text-sm">
                  <span className="text-neon-green"># </span>
                  Olá! Sou Gustavo Alves, 17 anos, 
                  <span className="text-neon-blue"> aluno do SENAI</span> e desenvolvedor aprendiz.
                </p>
                
                <p className="font-mono text-sm">
                  <span className="text-neon-green">## </span>
                  Sou um <span className="text-neon-purple">profissional em cloud computing</span>,
                  <span className="text-neon-yellow"> apoiador da ecologia</span> e
                  <span className="text-neon-pink"> interessado em sustentabilidade</span>.
                </p>

                <p className="font-mono text-sm">
                  <span className="text-neon-green">### </span>
                  Participei da olimpíada de cloud do SPSkills, conquistando o 10º lugar estadual. 
                  Minha missão é usar tecnologia para criar um futuro mais verde e inteligente.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="code-block p-4 rounded-lg">
                  <h4 className={`font-cyber font-bold text-sm mb-2 ${skillGroup.color}`}>
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-1">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-transparent border-current mr-1 mb-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="space-y-6">
            <h3 className="text-3xl font-cyber font-bold text-neon-blue text-center">
              Jornada de Desenvolvimento
            </h3>
            
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`
                    terminal-window p-4 cursor-pointer transition-all duration-300 border-l-4
                    ${selectedTimeline === index 
                      ? 'border-neon-blue bg-neon-blue/10 scale-105' 
                      : 'border-cyber-grid hover:border-neon-purple hover:bg-neon-purple/5'
                    }
                  `}
                  onClick={() => setSelectedTimeline(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-neon-green font-mono font-bold">
                          {item.year}
                        </span>
                        <h4 className="text-white font-cyber font-bold">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs text-neon-yellow border-neon-yellow/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Command */}
            <div className="terminal-window p-4">
              <div className="font-mono text-sm space-y-1">
                <div className="text-neon-green">
                  $ whoami
                </div>
                <div className="text-white">
                  Cloud Developer | SENAI Student | Sustainability Advocate | 17 years
                </div>
                <div className="text-neon-blue">
                  $ echo "Construindo o futuro com cloud computing" 
                </div>
                <div className="text-gray-400">
                  Construindo o futuro com cloud computing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
