
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative rounded-xl overflow-hidden card-hover"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-white/80 mb-4">{description}</p>
          
          <div className="flex gap-3">
            {liveUrl && (
              <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 border-white/20" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live
                </a>
              </Button>
            )}
            
            {githubUrl && (
              <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 border-white/20" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
