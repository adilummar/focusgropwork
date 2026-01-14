import { motion } from 'motion/react';
import { Coffee, Wifi, Music, Users, Clock, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FocusCafe() {
  const menuHighlights = [
    'Artisan Coffee',
    'Fresh Pastries',
    'Gourmet Sandwiches',
    'Healthy Salads',
    'Specialty Teas',
    'Fresh Juices',
    'Breakfast Items',
    'Desserts',
  ];

  const features = [
    {
      icon: <Wifi size={32} />,
      title: 'Free High-Speed WiFi',
      description: 'Stay connected while you work or relax',
    },
    {
      icon: <Music size={32} />,
      title: 'Curated Ambiance',
      description: 'Carefully selected music and cozy atmosphere',
    },
    {
      icon: <Clock size={32} />,
      title: 'Extended Hours',
      description: 'Open early to late for your convenience',
    },
    {
      icon: <Users size={32} />,
      title: 'Meeting Spaces',
      description: 'Perfect for business meetings and gatherings',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1684006997322-6a5128f44816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NTY1MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Focus Café"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-[#F6B6A8]/20 flex items-center justify-center mb-6">
              <Coffee size={40} className="text-[#F6B6A8]" />
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">Focus Café</h1>
            <p className="text-2xl text-white/70 max-w-2xl">
              Where premium coffee meets modern lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-white">About Focus Café</h2>
              <p className="text-lg text-white/70 mb-4 leading-relaxed">
                Focus Café is more than just a coffee shop – it's a lifestyle destination. We've created a warm, inviting space where you can work, meet, or simply relax with a perfectly crafted cup of coffee.
              </p>
              <p className="text-lg text-white/70 mb-4 leading-relaxed">
                Our baristas are trained artisans who take pride in every cup they serve. From single-origin beans to signature blends, we source only the finest coffee from around the world.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Whether you're a remote worker seeking a productive environment, a student studying for exams, or friends catching up, Focus Café provides the perfect backdrop for your day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10">
                <Coffee size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">20+</h3>
                <p className="text-white/60">Drink Options</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10">
                <Heart size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">4.9/5</h3>
                <p className="text-white/60">Customer Rating</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10 col-span-2">
                <Clock size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">7 AM - 11 PM</h3>
                <p className="text-white/60">Open Daily</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Menu Highlights</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto mb-6" />
            <p className="text-xl text-white/60">
              Crafted with passion, served with care
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {menuHighlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10 hover:border-[#F6B6A8]/30 transition-all duration-300 text-center cursor-pointer"
              >
                <Coffee size={32} className="text-[#F6B6A8] mx-auto mb-3" />
                <p className="text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Atmosphere */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">The Focus Café Experience</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center mx-auto mb-6 text-[#F6B6A8]">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Love Focus Café */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Why People Love Us</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10"
            >
              <h3 className="text-2xl mb-4 text-white">Premium Quality</h3>
              <p className="text-white/70">
                We source the finest beans and ingredients, ensuring every cup meets our high standards. Our commitment to quality is unwavering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10"
            >
              <h3 className="text-2xl mb-4 text-white">Cozy Ambiance</h3>
              <p className="text-white/70">
                Thoughtfully designed interiors with comfortable seating, perfect lighting, and a welcoming atmosphere that feels like home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10"
            >
              <h3 className="text-2xl mb-4 text-white">Expert Baristas</h3>
              <p className="text-white/70">
                Our skilled baristas are passionate about coffee and dedicated to crafting the perfect cup for every customer, every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Visit Us Today</h2>
            <p className="text-xl text-white/60 mb-12">
              Experience the perfect blend of coffee, comfort, and community
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#F6B6A8] text-[#0B0B0B] rounded-full hover:bg-[#FFB4A2] transition-colors duration-300 shadow-lg shadow-[#F6B6A8]/20"
            >
              Find Our Locations
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
