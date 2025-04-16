
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-conical-blue" />,
      title: "Address",
      details: "123 Innovation Drive, Cambridge, MA 02139",
    },
    {
      icon: <Mail className="w-5 h-5 text-conical-blue" />,
      title: "Email",
      details: "info@conicalpharmaceuticals.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-conical-blue" />,
      title: "Phone",
      details: "+1 (617) 555-0123",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-display font-bold text-conical-navy mb-4">
            Get in Touch
          </h2>
          <p className="text-conical-gray max-w-2xl mx-auto">
            We're always looking for opportunities to collaborate and discuss our research. Reach out to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-display font-bold text-conical-navy mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-sm font-medium text-conical-navy">
                        {item.title}
                      </h4>
                      <p className="text-conical-gray">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-medium text-conical-navy mb-4">
                  Career Opportunities
                </h4>
                <p className="text-conical-gray mb-3">
                  Interested in joining our team? View our current openings or send your resume to:
                </p>
                <p className="text-conical-blue">careers@conicalpharmaceuticals.com</p>
              </div>
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-conical-navy mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-conical-navy mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-conical-navy mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message subject"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-conical-navy mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-conical-blue hover:bg-conical-blue/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
