import { motion } from 'framer-motion';
import { Ghost, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const aboutLinks = [
    { name: 'Our Mission', href: '#' },
    { name: 'History', href: '#' },
    { name: 'Leadership', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const exploreLinks = [
    { name: 'Active Cases', href: '/cases' },
    { name: 'Ritual Shop', href: '/rituals' },
    { name: 'Evidence Gallery', href: '/gallery' },
    { name: 'Location Map', href: '/map' },
  ];

  const communityLinks = [
    { name: 'Join Society', href: '/community' },
    { name: 'Investigator Profiles', href: '/community' },
    { name: 'Submit Case', href: '/submit' },
    { name: 'Testimonials', href: '/community' },
  ];

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-primary-glow neon-glow">
                <Ghost className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Fangveil Society</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Investigating supernatural phenomena across India since 1947. 
              Bridging the mystical and scientific through careful documentation and ancient wisdom.
            </p>
          </motion.div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-primary">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-secondary">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-secondary">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 space-y-2">
              <h4 className="font-medium text-sm">Contact</h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="w-3 h-3" />
                contact@fangveil.org
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="w-3 h-3" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                Varanasi, India
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-8 pt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © 2024 Fangveil Society. All rights reserved. | Investigating the unexplained since 1947.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;