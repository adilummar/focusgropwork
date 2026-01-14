import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface VentureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

export function VentureCard({ title, description, icon, link, index }: VentureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative group bg-[#111111] rounded-2xl p-8 border border-[#F6B6A8]/10 hover:border-[#F6B6A8]/30 transition-all duration-300 overflow-hidden"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F6B6A8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-[#F6B6A8]/10 flex items-center justify-center mb-6 text-[#F6B6A8] group-hover:bg-[#F6B6A8]/20 transition-colors duration-300">
              {icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl mb-3 text-white">{title}</h3>
            <p className="text-white/60 mb-6">{description}</p>

            {/* CTA */}
            <div className="flex items-center text-[#F6B6A8] group-hover:translate-x-2 transition-transform duration-300">
              <span className="mr-2">View More</span>
              <ArrowRight size={20} />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
