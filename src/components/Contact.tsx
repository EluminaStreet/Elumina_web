import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scriptURL = "https://script.google.com/macros/s/AKfycbyvbV92DsjJaGzAG03i46ZSIE4dQ-VJnUFCtXHChVA1F5MSWsw-mshwvG3MEbROnF6T/exec"; // Replace with your Google Apps Script URL

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => formDataObj.append(key, formData[key]));

      const response = await fetch(scriptURL, { method: 'POST', body: formDataObj });
      if (response.ok) {
        setMessage('Message sent successfully!');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setMessage('Failed to send message. Try again later.');
      }
    } catch (error) {
      setMessage('Error submitting form. Please check your connection.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea id="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
          </div>
          
          <motion.button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <Send size={20} />
          </motion.button>
        </motion.form>

        {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
      </div>
    </section>
  );
}