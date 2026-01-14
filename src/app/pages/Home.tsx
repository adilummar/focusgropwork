import { motion } from 'motion/react';
import { VentureCard } from '../components/VentureCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ShoppingCart, IceCream, Coffee, Users, Store, TrendingUp, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Home() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      text: 'Focus Mart has completely changed my daily shopping experience. The quality and variety are exceptional!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Café Enthusiast',
      text: 'Focus Café is my go-to spot for meetings and relaxation. The ambiance and coffee are perfect.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Partner',
      text: 'Pop Ice has been a hit at our store! The quality and packaging are top-notch.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Local Resident',
      text: 'Focus Groups truly cares about the community. Their dedication to quality is evident in everything they do.',
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#111111] to-[#0B0B0B]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F6B6A8]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#F6B6A8]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              <span className="text-white">Focus Groups –</span>
              <br />
              <span className="text-[#F6B6A8]">Building Experiences</span>
              <br />
              <span className="text-white">That Matter</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          >
            A diversified business group delivering quality retail, food, and lifestyle experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#ventures"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#F6B6A8] text-[#0B0B0B] rounded-full hover:bg-[#FFB4A2] transition-colors duration-300 shadow-lg shadow-[#F6B6A8]/20"
            >
              Explore Our Ventures
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-[#F6B6A8] text-[#F6B6A8] rounded-full hover:bg-[#F6B6A8]/10 transition-colors duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#F6B6A8]/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#F6B6A8] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">About Focus Groups</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjY1ODQ2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Focus Groups Team"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/70 leading-relaxed">
                Focus Groups is a diversified business conglomerate operating across multiple consumer-facing sectors. Our commitment to excellence drives everything we do, from retail to food services.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We believe in building long-term relationships with our customers by delivering consistent quality, innovation, and value. Our ventures are designed to enhance everyday life experiences.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Through our various business verticals, we serve thousands of customers daily, contributing to community growth and sustainable development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Ventures Section */}
      <section id="ventures" className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Ventures</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto mb-6" />
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Explore our diverse portfolio of businesses designed to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VentureCard
              title="Focus Mart"
              description="Your one-stop destination for daily essentials, groceries, and household needs with unmatched quality and affordability."
              icon={<ShoppingCart size={32} />}
              link="/focus-mart"
              index={0}
            />
            <VentureCard
              title="Pop Ice"
              description="Delicious frozen treats crafted with care. Our stick ice brings joy to families with refreshing flavors and premium quality."
              icon={<IceCream size={32} />}
              link="/pop-ice"
              index={1}
            />
            <VentureCard
              title="Focus Café"
              description="A modern café experience where premium coffee meets cozy ambiance. Perfect for work, meetings, or relaxation."
              icon={<Coffee size={32} />}
              link="/focus-cafe"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111111] rounded-2xl p-8 border border-[#F6B6A8]/10"
            >
              <div className="w-16 h-16 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-[#F6B6A8]" />
              </div>
              <h3 className="text-3xl mb-4 text-white">Our Vision</h3>
              <p className="text-lg text-white/70 leading-relaxed">
                To become a trusted household name by delivering quality products and memorable experiences that enhance everyday life.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111111] rounded-2xl p-8 border border-[#F6B6A8]/10"
            >
              <div className="w-16 h-16 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-[#F6B6A8]" />
              </div>
              <h3 className="text-3xl mb-4 text-white">Our Mission</h3>
              <ul className="space-y-3 text-lg text-white/70">
                <li className="flex items-start">
                  <span className="text-[#F6B6A8] mr-2">•</span>
                  <span>Customer-first approach in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6B6A8] mr-2">•</span>
                  <span>Quality products at affordable prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6B6A8] mr-2">•</span>
                  <span>Innovation in retail and food services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F6B6A8] mr-2">•</span>
                  <span>Sustainable growth and community impact</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Impact</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-[#111111] rounded-2xl border border-[#F6B6A8]/10"
            >
              <Users size={48} className="text-[#F6B6A8] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl mb-2 text-[#F6B6A8]">
                <AnimatedCounter end={50000} suffix="+" />
              </div>
              <p className="text-white/60">Happy Customers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-8 bg-[#111111] rounded-2xl border border-[#F6B6A8]/10"
            >
              <Store size={48} className="text-[#F6B6A8] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl mb-2 text-[#F6B6A8]">
                <AnimatedCounter end={3} />
              </div>
              <p className="text-white/60">Business Verticals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 bg-[#111111] rounded-2xl border border-[#F6B6A8]/10"
            >
              <Target size={48} className="text-[#F6B6A8] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl mb-2 text-[#F6B6A8]">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-white/60">Community-Focused</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-8 bg-[#111111] rounded-2xl border border-[#F6B6A8]/10"
            >
              <TrendingUp size={48} className="text-[#F6B6A8] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl mb-2 text-[#F6B6A8]">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-white/60">Years Growing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">What Our Customers Say</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto" />
          </motion.div>

          <Slider {...sliderSettings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#111111] rounded-2xl p-8 border border-[#F6B6A8]/10 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#F6B6A8] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-[#F6B6A8]/10 pt-4">
                    <p className="text-white">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready to Partner With Us?</h2>
            <p className="text-xl text-white/60 mb-12">
              Join us in building exceptional experiences for communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#F6B6A8] text-[#0B0B0B] rounded-full hover:bg-[#FFB4A2] transition-colors duration-300 shadow-lg shadow-[#F6B6A8]/20"
              >
                Partner With Us
              </motion.a>
              <motion.a
                href="#ventures"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-[#F6B6A8] text-[#F6B6A8] rounded-full hover:bg-[#F6B6A8]/10 transition-colors duration-300"
              >
                Visit Our Ventures
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
