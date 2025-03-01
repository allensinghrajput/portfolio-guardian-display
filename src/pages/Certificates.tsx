
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CertificateCard from '@/components/CertificateCard';

const Certificates = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Certificate data
  const certificates = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: new Date(2022, 3, 15),
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      credentialUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: new Date(2021, 7, 22),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      credentialUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Full Stack Web Developer",
      issuer: "Udemy",
      date: new Date(2020, 5, 10),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      credentialUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Advanced React & GraphQL",
      issuer: "Frontend Masters",
      date: new Date(2021, 2, 5),
      image: "https://images.unsplash.com/photo-1546900703-cf06143d1239",
      credentialUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Cybersecurity Analyst",
      issuer: "IBM",
      date: new Date(2022, 1, 18),
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
      credentialUrl: "#",
      downloadUrl: "#"
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: new Date(2020, 11, 12),
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      credentialUrl: "#",
      downloadUrl: "#"
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center max-w-3xl mx-auto mb-16 ${animate ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="section-title">My Certifications</h2>
              <p className="text-muted-foreground">
                A collection of my professional certificates and qualifications in 
                cybersecurity, web development, and related fields.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate, index) => (
                <CertificateCard
                  key={index}
                  index={index}
                  title={certificate.title}
                  issuer={certificate.issuer}
                  date={certificate.date}
                  image={certificate.image}
                  credentialUrl={certificate.credentialUrl}
                  downloadUrl={certificate.downloadUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Certificates;
