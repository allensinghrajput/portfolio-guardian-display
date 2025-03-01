
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Project data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A secure e-commerce platform with advanced payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Food Ordering Application",
      description: "A mobile-responsive food delivery application with real-time order tracking.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React Native", "Firebase", "Geolocation", "Payment API"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Security Audit Tool",
      description: "A comprehensive security assessment tool for detecting vulnerabilities in web applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Python", "Cybersecurity", "Penetration Testing", "API"],
      category: "security",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Network Intrusion Detection System",
      description: "An advanced system for detecting and preventing network security breaches in real-time.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      tags: ["Python", "Machine Learning", "Network Security", "Data Analysis"],
      category: "security",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Restaurant Management System",
      description: "A complete solution for restaurant owners to manage orders, inventory, and staff.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Vulnerability Scanner Dashboard",
      description: "A visual dashboard for monitoring and managing security vulnerabilities across systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["React", "D3.js", "REST API", "Security"],
      category: "security",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Development', value: 'web' },
    { label: 'Cybersecurity', value: 'security' }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${animate ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="section-title">My Projects</h2>
              <p className="text-muted-foreground">
                Explore my portfolio of web development and cybersecurity projects, 
                showcasing a range of skills and technologies.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {filters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={selectedFilter === filter.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.value)}
                    className="min-w-[120px]"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No projects found with the selected filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
