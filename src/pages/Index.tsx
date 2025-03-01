
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Shield, Globe, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Example projects
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A secure e-commerce platform with advanced payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Food Ordering Application",
      description: "A mobile-responsive food delivery application with real-time order tracking.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React Native", "Firebase", "Geolocation", "Payment API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Security Audit Tool",
      description: "A comprehensive security assessment tool for detecting vulnerabilities in web applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Python", "Cybersecurity", "Penetration Testing", "API"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section */}
        <section className="py-20 px-6 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${animate ? 'animate-slide-in' : 'opacity-0'}`}>
              <div>
                <h2 className="section-title">About Me</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm Abhinav, a cybersecurity consultant and web developer with a passion for creating secure, efficient, and beautiful digital experiences.
                  </p>
                  <p>
                    With expertise in both security and development, I bring a unique perspective to projects that ensures both functionality and protection are seamlessly integrated from the ground up.
                  </p>
                  <p>
                    My approach combines technical precision with creative problem-solving, delivering solutions that not only meet but exceed client expectations.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">
                      Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-xl border">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                    <p className="text-muted-foreground">
                      Expert in vulnerability assessment, penetration testing, and security implementation.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border">
                    <Code className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                    <p className="text-muted-foreground">
                      Building responsive, performant websites and applications with modern technologies.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border">
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
                    <p className="text-muted-foreground">
                      Creating secure and efficient online shopping experiences with seamless checkout.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border">
                    <ExternalLink className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Integration</h3>
                    <p className="text-muted-foreground">
                      Connecting systems and services for streamlined operations and data flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-muted-foreground">
                A selection of my recent work, showcasing a range of web development and cybersecurity projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link to="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to secure your digital presence?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Let's collaborate on your next project and build something exceptional together.
            </p>
            <Button 
              asChild
              variant="outline" 
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
