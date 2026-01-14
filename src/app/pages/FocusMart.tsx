import { motion } from 'motion/react';
import { ShoppingCart, Package, Truck, Shield, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FocusMart() {
  const categories = [
    'Fresh Produce',
    'Groceries & Staples',
    'Dairy & Frozen',
    'Beverages',
    'Snacks & Confectionery',
    'Personal Care',
    'Household Items',
    'Electronics',
  ];

  const benefits = [
    {
      icon: <Package size={32} />,
      title: 'Wide Selection',
      description: 'Thousands of products across multiple categories',
    },
    {
      icon: <Truck size={32} />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep',
    },
    {
      icon: <Shield size={32} />,
      title: 'Quality Assured',
      description: 'Only the best products make it to our shelves',
    },
    {
      icon: <Star size={32} />,
      title: 'Best Prices',
      description: 'Competitive pricing without compromising quality',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1631856956334-35db20cb7748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXBlcm1hcmtldCUyMGludGVyaW9yfGVufDF8fHx8MTc2NjUyNzk5OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Focus Mart"
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
              <ShoppingCart size={40} className="text-[#F6B6A8]" />
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">Focus Mart</h1>
            <p className="text-2xl text-white/70 max-w-2xl">
              Your trusted destination for daily essentials and groceries
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
              <h2 className="text-4xl mb-6 text-white">About Focus Mart</h2>
              <p className="text-lg text-white/70 mb-4 leading-relaxed">
                Focus Mart is your neighborhood hypermarket, offering a comprehensive range of products from fresh produce to electronics. We're committed to making your shopping experience convenient, affordable, and enjoyable.
              </p>
              <p className="text-lg text-white/70 mb-4 leading-relaxed">
                With a focus on quality and customer satisfaction, we source products from trusted suppliers and maintain strict quality control standards.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Our modern stores are designed to provide a pleasant shopping environment, with wide aisles, organized sections, and friendly staff ready to assist you.
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
                <Heart size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">5000+</h3>
                <p className="text-white/60">Products</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10">
                <Star size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">4.8/5</h3>
                <p className="text-white/60">Rating</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10 col-span-2">
                <Shield size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">Quality Guarantee</h3>
                <p className="text-white/60">100% Satisfaction or Money Back</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Product Categories</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10 hover:border-[#F6B6A8]/30 transition-all duration-300 text-center cursor-pointer"
              >
                <p className="text-white">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Focus Mart */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Why Choose Focus Mart</h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center mx-auto mb-6 text-[#F6B6A8]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl mb-3 text-white">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Visit Focus Mart Today</h2>
            <p className="text-xl text-white/60 mb-12">
              Experience quality shopping at your neighborhood store
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#F6B6A8] text-[#0B0B0B] rounded-full hover:bg-[#FFB4A2] transition-colors duration-300 shadow-lg shadow-[#F6B6A8]/20"
            >
              Find Nearest Store
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
