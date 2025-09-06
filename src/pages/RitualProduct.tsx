import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Clock, Users, Shield, Download } from 'lucide-react';

// Mock data - same as in Rituals.tsx
const mockRituals = [
  {
    id: 'r1',
    title: 'Shadow-Cleave Banishing',
    level: 'Advanced',
    priceINR: 499,
    description: 'Powerful banishing ritual to sever hostile attachments and negative entities.',
    rating: 4.8,
    category: 'Protection',
    duration: '45-60 minutes',
    difficulty: 'Requires 2+ years experience',
    materials: ['Black candles', 'Sea salt', 'Sage bundle', 'Silver blade', 'Protective circle materials'],
    steps: [
      'Prepare sacred space with protective circle',
      'Light candles in specific formation',
      'Recite banishing incantations',
      'Perform cleaving gesture with silver blade',
      'Seal the working with salt barrier'
    ],
    warnings: [
      'Not recommended for beginners',
      'Ensure protective measures are in place',
      'Have backup practitioner present'
    ],
    reviews: [
      { name: 'Priya S.', rating: 5, comment: 'Incredibly effective for clearing negative entities from my home.' },
      { name: 'Raj M.', rating: 5, comment: 'Well documented with clear instructions. Worked exactly as described.' },
      { name: 'Ananya K.', rating: 4, comment: 'Powerful ritual, but definitely requires advanced knowledge.' }
    ]
  },
  // Add other rituals...
];

const RitualProduct = () => {
  const { id } = useParams();
  const [ritual, setRitual] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // In real app, fetch from Supabase
    const foundRitual = mockRituals.find(r => r.id === id);
    setRitual(foundRitual);
  }, [id]);

  const handlePurchase = () => {
    // Mock Stripe checkout
    console.log('Purchasing ritual:', id);
    window.open(`#ritual-${id}-download`, '_blank');
  };

  if (!ritual) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔮</div>
          <h2 className="text-2xl font-bold mb-2">Ritual Not Found</h2>
          <p className="text-muted-foreground mb-6">The requested ritual could not be found.</p>
          <Link to="/rituals" className="px-6 py-3 rounded-xl bg-primary text-white font-medium">
            Back to Rituals
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'materials', label: 'Materials' },
    { id: 'steps', label: 'Steps' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/rituals"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Rituals
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  ritual.level === 'Beginner' ? 'bg-secondary/20 text-secondary' :
                  ritual.level === 'Intermediate' ? 'bg-primary/20 text-primary' :
                  ritual.level === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {ritual.level}
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-muted-foreground">
                  {ritual.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {ritual.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(ritual.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                    />
                  ))}
                  <span className="ml-2 text-muted-foreground">({ritual.rating})</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{ritual.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{ritual.difficulty}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {ritual.description}
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-b border-white/10 mb-8"
            >
              <div className="flex gap-8">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-1 text-sm font-medium transition-colors relative ${
                      activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Purpose</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This ritual is designed for experienced practitioners dealing with persistent 
                      negative entities or hostile attachments. The Shadow-Cleave technique creates 
                      a spiritual severance that prevents re-attachment while providing lasting protection.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">When to Use</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Persistent negative entity activity</li>
                      <li>• Multiple failed cleansing attempts</li>
                      <li>• Hostile spiritual attachments</li>
                      <li>• Recurring paranormal disturbances</li>
                    </ul>
                  </div>

                  {ritual.warnings && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-red-400" />
                        <h4 className="font-semibold text-red-400">Important Warnings</h4>
                      </div>
                      <ul className="text-red-300 space-y-1">
                        {ritual.warnings.map((warning: string, index: number) => (
                          <li key={index}>• {warning}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'materials' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Required Materials</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {ritual.materials.map((material: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl glass">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{material}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-sm text-primary-foreground">
                      <strong>Note:</strong> All materials should be consecrated before use. 
                      Detailed preparation instructions are included in the full PDF guide.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'steps' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Ritual Steps</h3>
                  <div className="space-y-4">
                    {ritual.steps.map((step: string, index: number) => (
                      <div key={index} className="flex gap-4 p-4 rounded-xl glass">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <p className="text-sm text-secondary">
                      <strong>Complete Guide:</strong> The full PDF includes detailed timing, 
                      exact incantations, hand positions, and troubleshooting tips.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Reviews</h3>
                  <div className="space-y-6">
                    {ritual.reviews.map((review: any, index: number) => (
                      <div key={index} className="p-4 rounded-xl glass border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-medium">{review.name}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="p-6 rounded-2xl glass border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    ₹{ritual.priceINR}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Instant PDF Download
                  </p>
                </div>

                <button
                  onClick={handlePurchase}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 neon-glow mb-4"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Purchase & Download
                </button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Download className="w-4 h-4" />
                    Instant download after payment
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    30-day money-back guarantee
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    Expert support included
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete ritual instructions (20+ pages)</li>
                    <li>• Material preparation guide</li>
                    <li>• Safety protocols & warnings</li>
                    <li>• Troubleshooting section</li>
                    <li>• Email support for 30 days</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualProduct;