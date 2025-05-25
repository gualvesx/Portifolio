
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Instagram } from 'lucide-react';
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast("Mensagem enviada com sucesso! 🚀", {
      description: "Retornarei o contato em breve."
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-neon-blue',
      description: 'Explore meu código'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-neon-purple',
      description: 'Conecte-se comigo'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:text-neon-pink',
      description: 'Acompanhe minha jornada'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cyber font-bold text-white mb-4">
            <span className="text-neon-pink">{'<'}</span>
            <span className="text-white mx-4">Contato</span>
            <span className="text-neon-pink">{' />'}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-pink to-neon-blue mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Vamos construir o futuro juntos? Entre em contato para discutir projetos, 
            colaborações ou apenas para trocar ideias sobre tecnologia sustentável.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="terminal-window p-8">
            <div className="flex items-center mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">contact-form.tsx</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-neon-green font-mono text-sm">
                  {'>'} Nome:
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="bg-cyber-darker border-cyber-grid focus:border-neon-blue transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-neon-green font-mono text-sm">
                  {'>'} Email:
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="bg-cyber-darker border-cyber-grid focus:border-neon-blue transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-neon-green font-mono text-sm">
                  {'>'} Mensagem:
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                  rows={6}
                  className="bg-cyber-darker border-cyber-grid focus:border-neon-blue transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-black font-bold py-3 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="loader"></div>
                    Enviando...
                  </div>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
            </form>

            {/* Terminal Output */}
            <div className="mt-6 space-y-1 font-mono text-sm">
              <div className="text-neon-green">$ form.validate()</div>
              <div className="text-gray-400">✓ All fields validated</div>
              <div className="text-neon-blue">$ await sendMessage()</div>
              <div className="text-gray-400 animate-pulse">{'>'} Ready to send...</div>
            </div>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="terminal-window p-6">
              <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
                Redes Sociais
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center gap-4 p-4 rounded-lg border border-cyber-grid 
                      hover:border-current transition-all duration-300 group ${social.color}
                    `}
                  >
                    <social.icon className="w-8 h-8 transition-colors" />
                    <div>
                      <div className="font-cyber font-bold text-white group-hover:text-current transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {social.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="terminal-window p-6">
              <h3 className="text-2xl font-cyber font-bold text-neon-green mb-6">
                Informações Rápidas
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-neon-yellow">📍</span>
                  <span className="text-gray-300">São Paulo, Brasil</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neon-yellow">⏰</span>
                  <span className="text-gray-300">Fuso: GMT-3 (Brasília)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neon-yellow">💬</span>
                  <span className="text-gray-300">Português, Inglês</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-neon-yellow">🚀</span>
                  <span className="text-gray-300">Disponível para novos projetos</span>
                </div>
              </div>
            </div>

            {/* Easter Egg Terminal */}
            <div className="terminal-window p-6">
              <h3 className="text-lg font-cyber font-bold text-neon-purple mb-4">
                Easter Egg 🥚
              </h3>
              <div className="font-mono text-sm space-y-1">
                <div className="text-neon-green">$ cat curiosidades.txt</div>
                <div className="text-gray-400">• Comecei a programar aos 16 anos</div>
                <div className="text-gray-400">• Já criei mais de 100 projetos</div>
                <div className="text-gray-400">• Tenho uma planta IoT que me avisa quando tem sede 🌱</div>
                <div className="text-gray-400">• Meu editor favorito é VS Code com tema Cyberpunk</div>
                <div className="text-neon-blue">$ echo "Pressione Ctrl+K para terminal secreto"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
