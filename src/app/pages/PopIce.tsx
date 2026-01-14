import { motion } from "motion/react";
import {
  IceCream,
  Sparkles,
  Users,
  Shield,
  Award,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PopIce() {
  const milkBasedFlavors = [
    "Jackfruit",
    "Avocado",
    "Passion Fruit",
    "Strawberry",
    "Chickoo",
    "Musk Melon",
    "Tender Coconut",
    "Mango",
    "Custard Apple",
    "Blueberry",
    "Guava",
    "Spanish Delight",
    "Arabian Delight",
    "Fig",
    "Special Oreo",
    "Fruit Biscuit",
    "Royal Velvet",
    "Jamun (Black Storm)",
    "Caramel",
    "Chocolate",
    "Kaju Malai",
    "Bubble Gum",
    "Lotus Biscoff",
    "Black Forest",
  ];

  const waterBasedFlavors = [
    "Water Melon",
    "Grapes",
    "Green Apple",
    "Pineapple",
    "Lychee",
    "Orange",
  ];

  const outlets = [
    {
      location: "Hubli, Dharwad",
      addresses: [
        "Near Focusmart Sirur park",
        "Opp tolenkare lake Ravinagar",
        "Rajeev Nagar road Akshay Colony",
        "R.n Shetty road, near Parbhashji Wellness Care",
      ],
    },
    {
      location: "Gadag",
      addresses: [
        "Sidharoodha matt near Karnataka Bank",
        "Kopilar road, opp-satellite Complex",
      ],
    },
    {
      location: "Bagalkot",
      addresses: [
        "Udupi Sweets & Bakers Vidyanagar",
        "Drunklab road opp BVB College",
      ],
    },
    {
      location: "Koppal",
      addresses: [
        "Behind police station, Navanagar",
        "Jannath Nagar, near Afros school, old Hubli",
      ],
    },
  ];

  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "Premium Ingredients",
      description:
        "Crafted with fresh milk, cream and fruit pulp as main ingredients",
    },
    {
      icon: <Shield size={32} />,
      title: "Hygienic Manufacturing",
      description: "Produced in state-of-the-art, certified facilities",
    },
    {
      icon: <Award size={32} />,
      title: "Quality Certified",
      description: "Meets all food safety and quality standards",
    },
    {
      icon: <Users size={32} />,
      title: "Family Favorite",
      description: "Loved by kids and adults alike since 2017",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1699400203948-b309ddf47443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGljZSUyMHBvcHN8ZW58MXx8fHwxNzY2NTkxNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Pop Ice"
            className="w-full h-full object-cover"
          />
          {/* <video
            src="/popice.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-[#F6B6A8]/20 flex items-center justify-center mb-6">
              <IceCream size={40} className="text-[#F6B6A8]" />
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">Pop Ice</h1>
            <p className="text-3xl text-[#F6B6A8] mb-4">
              "Your Gateway to Popsicle Paradise"
            </p>
            <p className="text-xl text-white/70 max-w-2xl">
              Happiness on a stick – Experience pure fruits and flavours since
              2017
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
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl mb-6 text-white">
                Popsicle Paradise Delights!
              </h2>
              <p className="text-lg text-white/70 mb-4 leading-relaxed">
                Experience the essence of pure fruits and flavours. Our
                popsicles are manufactured with finest ingredients from nature
                and high quality product sources.
              </p>
              <p className="text-lg text-white/70 mb-4 leading-relaxed">
                Popice now available at our new hub in Hubli, Koppal, Hosapet,
                Gadag, Dharwad and Belgavi. Savor the taste of nature at your
                nearest Popice store!
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                With years of taste and expertise dating back to 2017, our
                premium popsicles have delighted taste buds across Kerala and
                beyond. Unveiling our newest chapter in North Karnataka.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 grid grid-cols-2 gap-4"
            >
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10">
                <Sparkles size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">30+</h3>
                <p className="text-white/60">Flavors</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10">
                <TrendingUp size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">Since 2017</h3>
                <p className="text-white/60">Years of Expertise</p>
              </div>
              <div className="bg-[#111111] p-6 rounded-2xl border border-[#F6B6A8]/10 col-span-2">
                <Award size={32} className="text-[#F6B6A8] mb-4" />
                <h3 className="text-2xl text-white mb-2">Premium Quality</h3>
                <p className="text-white/60">Fresh Milk, Cream & Fruit Pulp</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milk-Based Flavors Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              All Milk Variety
            </h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto mb-6" />
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our popsicles are crafted with the goodness of fresh milk, cream
              and fruit pulp as the main ingredient
            </p>
          </motion.div>

          <div className="space-y-6 overflow-hidden">
            {/* Row 1 - Left to Right */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-4 flex-wrap justify-center"
            >
              {milkBasedFlavors.slice(0, 8).map((flavor) => (
                <div
                  key={flavor}
                  className="px-6 py-4 bg-gradient-to-br from-[#F6B6A8]/20 to-transparent rounded-2xl border border-[#F6B6A8]/20 hover:border-[#F6B6A8]/40 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <p className="text-white text-center whitespace-nowrap">
                    {flavor}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Row 2 - Right to Left */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-4 flex-wrap justify-center"
            >
              {milkBasedFlavors.slice(8, 16).map((flavor) => (
                <div
                  key={flavor}
                  className="px-6 py-4 bg-gradient-to-br from-[#F6B6A8]/20 to-transparent rounded-2xl border border-[#F6B6A8]/20 hover:border-[#F6B6A8]/40 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <p className="text-white text-center whitespace-nowrap">
                    {flavor}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Row 3 - Left to Right */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-4 flex-wrap justify-center"
            >
              {milkBasedFlavors.slice(16, 24).map((flavor) => (
                <div
                  key={flavor}
                  className="px-6 py-4 bg-gradient-to-br from-[#F6B6A8]/20 to-transparent rounded-2xl border border-[#F6B6A8]/20 hover:border-[#F6B6A8]/40 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <p className="text-white text-center whitespace-nowrap">
                    {flavor}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water-Based Flavors Section */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Water Base Variety
            </h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto mb-6" />
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our water-based popsicles showcase tropicals as the main
              ingredient for burst of exotic flavors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {waterBasedFlavors.map((flavor, index) => (
              <motion.div
                key={flavor}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#F6B6A8]/20 to-transparent p-6 rounded-2xl border border-[#F6B6A8]/20 hover:border-[#F6B6A8]/40 transition-all duration-300 text-center cursor-pointer"
              >
                <IceCream size={32} className="text-[#F6B6A8] mx-auto mb-3" />
                <p className="text-white text-sm">{flavor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Quality */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Quality You Can Trust
            </h2>
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

      {/* Outlets Section */}
      <section className="py-20 px-6 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Popice Outlets
            </h2>
            <div className="w-20 h-1 bg-[#F6B6A8] mx-auto mb-6" />
            <p className="text-xl text-white/60">
              Find us at these locations across North Karnataka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outlets.map((outlet, index) => (
              <motion.div
                key={outlet.location}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10"
              >
                <div className="flex items-center mb-4">
                  <MapPin size={24} className="text-[#F6B6A8] mr-3" />
                  <h3 className="text-xl text-white">{outlet.location}</h3>
                </div>
                <ul className="space-y-2">
                  {outlet.addresses.map((address, idx) => (
                    <li key={idx} className="text-white/60 text-sm">
                      • {address}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Perfect For Everyone
            </h2>
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
              <h3 className="text-2xl mb-4 text-white">For Kids</h3>
              <p className="text-white/70">
                Fun flavors and playful packaging that kids absolutely love.
                Perfect for school lunch boxes and after-play treats.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10"
            >
              <h3 className="text-2xl mb-4 text-white">For Families</h3>
              <p className="text-white/70">
                Affordable and delicious treats that bring the whole family
                together. Great for parties and celebrations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111111] p-8 rounded-2xl border border-[#F6B6A8]/10"
            >
              <h3 className="text-2xl mb-4 text-white">For Retailers</h3>
              <p className="text-white/70">
                High-demand product with excellent margins. Reliable supply and
                attractive packaging boost sales.
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
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Become a Distributor
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Partner with us and bring Pop Ice to your community
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#F6B6A8] text-[#0B0B0B] rounded-full hover:bg-[#FFB4A2] transition-colors duration-300 shadow-lg shadow-[#F6B6A8]/20"
            >
              Apply for Distribution
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
