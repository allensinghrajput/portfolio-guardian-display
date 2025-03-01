
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="name"
            className="text-sm font-medium"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="email"
            className="text-sm font-medium"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label 
          htmlFor="subject"
          className="text-sm font-medium"
        >
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="What is this regarding?"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <label 
          htmlFor="message"
          className="text-sm font-medium"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Processing...</>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
