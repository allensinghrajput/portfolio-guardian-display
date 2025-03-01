
import { useEffect, useRef } from 'react';
import { ArrowRight, Code, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const profileRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const profileImage = profileRef.current;
    const textContent = textRef.current;

    if (profileImage) {
      profileImage.classList.add('animate-scale-in');
    }

    if (textContent) {
      textContent.classList.add('animate-reveal-left');
    }
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span className="text-muted-foreground">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Cybersecurity Expert & Web Developer
            </h1>
            
            <p className="text-xl text-muted-foreground">
              I design secure digital solutions and build exceptional web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild>
                <Link to="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Cybersecurity</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert security consultation and implementation
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Code className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-medium">Web Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom websites and web applications
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary opacity-70 blur-xl"></div>
            <div className="hero-image aspect-square max-w-md mx-auto">
              <img 
                ref={profileRef}
                src="/lovable-uploads/693f8b9a-e878-45eb-af42-5f886c8ecb7a.png" 
                alt="Abhinav - Cybersecurity Consultant & Web Developer" 
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
