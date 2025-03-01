
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="font-bold text-xl">Abhinav</Link>
            <p className="mt-2 text-muted-foreground">
              Cybersecurity consultant and web developer specializing in secure, 
              performant, and beautiful digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link to="/certificates" className="text-muted-foreground hover:text-foreground transition-colors">Certificates</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@example.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Abhinav. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Designed and built with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
