import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white">Get In Touch</h1>
          <div className="w-20 h-1 bg-[#F6B6A8] mx-auto mb-6" />
          <p className="text-xl text-white/70">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl mb-8 text-white">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-[#F6B6A8]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-white">Email</h3>
                      <p className="text-white/60">info@focusgroups.com</p>
                      <p className="text-white/60">support@focusgroups.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-[#F6B6A8]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-white">Phone</h3>
                      <p className="text-white/60">+1 (555) 123-4567</p>
                      <p className="text-white/60">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-[#F6B6A8]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-white">Location</h3>
                      <p className="text-white/60">
                        123 Business Avenue<br />
                        City Center, State 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10"
              >
                <h3 className="text-xl mb-4 text-white">Business Hours</h3>
                <div className="space-y-2 text-white/60">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10">
                <h2 className="text-3xl mb-8 text-white">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-white">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#F6B6A8]/20 rounded-xl focus:outline-none focus:border-[#F6B6A8] text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-white">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#F6B6A8]/20 rounded-xl focus:outline-none focus:border-[#F6B6A8] text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-white">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#F6B6A8]/20 rounded-xl focus:outline-none focus:border-[#F6B6A8] text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block mb-2 text-white">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#F6B6A8]/20 rounded-xl focus:outline-none focus:border-[#F6B6A8] text-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="distribution">Distribution</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-white">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#F6B6A8]/20 rounded-xl focus:outline-none focus:border-[#F6B6A8] text-white resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-8 py-4 bg-[#F6B6A8] text-[#0B0B0B] rounded-full hover:bg-[#FFB4A2] transition-colors duration-300 shadow-lg shadow-[#F6B6A8]/20 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#111111] rounded-2xl border border-[#F6B6A8]/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#F6B6A8]/5 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#F6B6A8] mx-auto mb-4" />
                  <p className="text-white/60">Map Location Placeholder</p>
                  <p className="text-white/40 text-sm mt-2">Interactive map would be integrated here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
