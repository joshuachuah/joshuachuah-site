import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'motion/react';

const contacts = [
  {
    name: 'Email',
    icon: faEnvelope,
    value: 'jchuah07@gmail.com',
    link: 'mailto:jchuah07@gmail.com',
    display: 'jchuah07@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    value: 'in/joshuachuah',
    link: 'https://linkedin.com/in/joshuachuah',
    display: 'in/joshuachuah',
  },
];

const Contact = () => {

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const iconHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const calendarVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: -30,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: '' });

    try {
      // Add your form submission logic here
      // For example, using fetch to send to an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      setFormStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-black min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-8 text-center">
        Connect with me through any of these platforms.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-6 rounded-xl border border-gray-300 bg-white dark:bg-black transition-all duration-300 shadow-sm hover:shadow-lg hover:border-gray-400 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex-shrink-0 mr-4">
              <FontAwesomeIcon 
                icon={contact.icon} 
                className="text-2xl text-gray-400 group-hover:text-white-800 transition-colors duration-300" 
              />
            </div>
            <div>
              <div className="font-semibold text-gray-600 text-lg">{contact.name}</div>
              <div className="text-gray-400 text-sm mt-1">{contact.display}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 