import { motion } from 'framer-motion';
import { ArrowRight, Eye, FileText, Image, MapPin, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const quickLinks = [
    {
      icon: FileText,
      title: 'Submit Case',
      description: 'Report supernatural activity',
      href: '/submit',
      gradient: 'from-primary to-primary-glow',
    },
    {
      icon: Eye,
      title: 'Active Cases',
      description: 'View ongoing investigations',
      href: '/cases',
      gradient: 'from-secondary to-secondary-glow',
    },
    {
      icon: Zap,
      title: 'Ritual Shop',
      description: 'Protective rituals & guides',
      href: '/rituals',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: MapPin,
      title: 'Location Map',
      description: 'Hotspots across India',
      href: '/map',
      gradient: 'from-secondary to-primary',
    },
  ];

  const stats = [
    { number: '847', label: 'Cases Investigated' },
    { number: '23', label: 'Active Investigations' },
    { number: '156', label: 'Rituals Documented' },
    { number: '12', label: 'Expert Investigators' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Fangveil Society
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Investigating supernatural phenomena across India since 1947.
            <br />
            Where ancient wisdom meets modern investigation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/submit" 
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold transition-all duration-300 hover:scale-105 neon-glow flex items-center justify-center gap-2"
            >
              Report Activity
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/cases" 
              className="px-8 py-4 rounded-2xl glass border-2 border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-secondary/50"
            >
              Explore Cases
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Access</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through our investigations and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={link.href}
                  className="block p-6 rounded-2xl glass border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} mb-4 flex items-center justify-center neon-glow`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                  <ArrowRight className="w-4 h-4 mt-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Rituals Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ancient Rituals</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover protective rituals and spiritual practices passed down through generations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Shadow Cleaving', level: 'Advanced', price: '₹499' },
                { name: 'Warding Sigils', level: 'Beginner', price: '₹199' },
                { name: 'Karmic Binding', level: 'Expert', price: '₹899' },
              ].map((ritual, index) => (
                <motion.div
                  key={ritual.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass border border-white/10"
                >
                  <div className="text-xs text-primary mb-2">{ritual.level}</div>
                  <h3 className="font-semibold mb-2">{ritual.name}</h3>
                  <div className="text-lg font-bold text-secondary">{ritual.price}</div>
                </motion.div>
              ))}
            </div>
            <Link 
              to="/rituals" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Rituals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Gallery Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Evidence Gallery</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Documented evidence from our investigations across India
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="aspect-square rounded-2xl glass border border-white/10 overflow-hidden group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image className="w-8 h-8 text-white/50" />
                  </div>
                </motion.div>
              ))}
            </div>
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-secondary text-secondary font-semibold transition-all duration-300 hover:bg-secondary hover:text-black"
            >
              View Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Society</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Become part of India's premier supernatural investigation community. 
              Together, we uncover the mysteries that lie beyond the veil.
            </p>
            <Link 
              to="/community" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-secondary to-secondary-glow text-black font-bold transition-all duration-300 hover:scale-105 emerald-glow"
            >
              <Users className="w-5 h-5" />
              Join Fangveil Society
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;