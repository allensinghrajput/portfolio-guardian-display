
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${animate ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="section-title">Get in Touch</h2>
              <p className="text-muted-foreground">
                Have a project in mind or want to learn more about my services? 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className={`space-y-8 ${animate ? 'animate-reveal-left' : 'opacity-0'}`}>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a 
                          href="mailto:hello@example.com" 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          hello@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a 
                          href="tel:+1234567890" 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">
                          San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Availability</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for new projects and consulting work. 
                    My typical response time is within 24 hours.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-4">
                    Whether you need a new website, security assessment, or consulting services,
                    I'm here to help you achieve your goals.
                  </p>
                </div>
              </div>
              
              <div className={`bg-card border rounded-xl p-8 shadow-sm ${animate ? 'animate-reveal-right' : 'opacity-0'}`}>
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
