
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, Award, ExternalLink, Download } from 'lucide-react';
import { format } from 'date-fns';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: Date;
  image: string;
  credentialUrl?: string;
  downloadUrl?: string;
  index: number;
}

const CertificateCard = ({
  title,
  issuer,
  date,
  image,
  credentialUrl,
  downloadUrl,
  index
}: CertificateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden card-hover bg-card border transition-all duration-300",
        isHovered ? "shadow-lg" : "shadow-sm"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Award className="h-4 w-4 mr-1" />
            <span>{issuer}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{format(date, 'MMMM yyyy')}</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          {credentialUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Verify
              </a>
            </Button>
          )}
          
          {downloadUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={downloadUrl} download>
                <Download className="mr-2 h-4 w-4" /> Download
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
