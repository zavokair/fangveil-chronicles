import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data - in real app this would come from Supabase
const mockRituals = [
  {
    id: 'r1',
    title: 'Shadow-Cleave Banishing',
    level: 'Advanced',
    priceINR: 499,
    description: 'Powerful banishing ritual to sever hostile attachments and negative entities.',
    rating: 4.8,
    category: 'Protection',
  },
  {
    id: 'r2',
    title: 'Warding Sigil Creation',
    level: 'Beginner',
    priceINR: 199,
    description: 'Simple home sigil ritual to create protective thresholds and barriers.',
    rating: 4.6,
    category: 'Protection',
  },
  {
    id: 'r3',
    title: 'Karmic Unbind (Agni-Seal)',
    level: 'Expert',
    priceINR: 899,
    description: 'Advanced ritual to close karmic loops and break ancestral curses.',
    rating: 4.9,
    category: 'Cleansing',
  },
  {
    id: 'r4',
    title: 'Elayira Calling Mantra',
    level: 'Intermediate',
    priceINR: 299,
    description: 'Mantra ritual designed to call lost soulmate energies and spiritual connections.',
    rating: 4.7,
    category: 'Attraction',
  },
  {
    id: 'r5',
    title: 'Ancestral Communication Rite',
    level: 'Advanced',
    priceINR: 599,
    description: 'Sacred ritual to establish contact with departed ancestors for guidance.',
    rating: 4.5,
    category: 'Communication',
  },
  {
    id: 'r6',
    title: 'Chakra Alignment Ceremony',
    level: 'Intermediate',
    priceINR: 349,
    description: 'Complete chakra balancing ritual using ancient Vedic techniques.',
    rating: 4.8,
    category: 'Healing',
  },
];

const Rituals = () => {
  const [rituals, setRituals] = useState(mockRituals);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const categories = ['All', 'Protection', 'Cleansing', 'Attraction', 'Communication', 'Healing'];

  const filteredRituals = rituals.filter(ritual => {
    const matchesSearch = ritual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ritual.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || ritual.level === selectedLevel;
    const matchesCategory = selectedCategory === 'All' || ritual.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const handlePurchase = async (ritualId: string) => {
    // Mock Stripe checkout - in real app this would integrate with Supabase edge functions
    console.log('Purchasing ritual:', ritualId);
    // Simulate opening in new tab
    window.open(`#ritual-${ritualId}-download`, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ritual Shop
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ancient wisdom documented and preserved. Purchase protective rituals, 
            cleansing ceremonies, and spiritual guides used by our investigators.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search rituals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level} Level</option>
                ))}
              </select>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRituals.map((ritual, index) => (
            <motion.div
              key={ritual.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl glass border border-white/10 transition-all duration-300 hover:border-primary/30 hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ritual.level === 'Beginner' ? 'bg-secondary/20 text-secondary' :
                        ritual.level === 'Intermediate' ? 'bg-primary/20 text-primary' :
                        ritual.level === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {ritual.level}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs bg-white/10 text-muted-foreground">
                        {ritual.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {ritual.title}
                    </h3>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(ritual.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({ritual.rating})</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {ritual.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-secondary">
                    ₹{ritual.priceINR}
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      to={`/rituals/${ritual.id}`}
                      className="px-4 py-2 rounded-xl border border-white/20 text-sm font-medium transition-all duration-300 hover:border-primary/50"
                    >
                      Preview
                    </Link>
                    <button
                      onClick={() => handlePurchase(ritual.id)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Buy PDF
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredRituals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold mb-2">No rituals found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 rounded-2xl glass border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">About Our Rituals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-primary">Authenticity Guaranteed</h3>
              <p className="text-sm text-muted-foreground mb-4">
                All rituals are sourced from verified practitioners and have been tested 
                by our team of expert investigators across multiple cases.
              </p>
              
              <h3 className="font-semibold mb-2 text-secondary">Instant Download</h3>
              <p className="text-sm text-muted-foreground">
                Get immediate access to detailed PDF guides with step-by-step instructions, 
                required materials, and safety precautions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Expert Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Each purchase includes email support from our experienced practitioners 
                for questions about implementation and customization.
              </p>
              
              <h3 className="font-semibold mb-2 text-secondary">Safe Practice</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive safety guidelines and protective measures are included 
                with every ritual to ensure responsible practice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rituals;