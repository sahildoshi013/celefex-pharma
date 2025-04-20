import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Form,
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const formattedMessage = `*New Contact Form Submission*%0A
Name: ${values.name}%0A
Email: ${values.email}%0A
Subject: ${values.subject}%0A
Message: ${values.message}`;

      const whatsappUrl = `https://wa.me/918000074479?text=${formattedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Opening WhatsApp",
        description: "Redirecting you to WhatsApp to send your message.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to open WhatsApp. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-conical-blue" />,
      title: "Address",
      details: "123 Innovation Drive, Cambridge, MA 02139",
      link: "https://maps.google.com/?q=123+Innovation+Drive,+Cambridge,+MA+02139",
    },
    {
      icon: <Mail className="w-5 h-5 text-conical-blue" />,
      title: "Email",
      details: "info@conicalpharmaceuticals.com",
      link: "mailto:info@conicalpharmaceuticals.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-conical-blue" />,
      title: "Phone",
      details: "+1 (617) 555-0123",
      link: "tel:+16175550123",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-conical-navy mb-6">
            Get in Touch
          </h2>
          <p className="text-conical-gray/80 max-w-2xl mx-auto text-lg">
            We're always looking for opportunities to collaborate and discuss our research. Reach out to learn more.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-lg transition-all duration-300 hover:border-conical-lightpurple/20">
              <h3 className="text-2xl font-display font-bold text-conical-navy mb-6 group-hover:text-conical-purple transition-colors">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mr-4 mt-1 group-hover/item:text-conical-purple transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-conical-navy">
                        {item.title}
                      </h4>
                      <a 
                        href={item.link} 
                        target={item.title === "Address" ? "_blank" : undefined}
                        rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                        className="text-conical-gray hover:text-conical-blue transition-colors"
                      >
                        {item.details}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100 group hover:shadow-lg transition-all duration-300 hover:border-conical-lightpurple/20">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-conical-navy">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="focus:border-conical-purple focus:ring-conical-purple" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-conical-navy">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email address" 
                          type="email" 
                          className="focus:border-conical-purple focus:ring-conical-purple" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-conical-navy">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Message subject" 
                          className="focus:border-conical-purple focus:ring-conical-purple" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-conical-navy">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="min-h-[150px] focus:border-conical-purple focus:ring-conical-purple" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-conical-blue hover:bg-conical-blue/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <MessageCircle className="mr-2 h-4 w-4 animate-spin" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send Message via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
