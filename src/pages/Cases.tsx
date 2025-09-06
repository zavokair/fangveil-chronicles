import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data - in real app this would come from Supabase
const mockCases = [
  {
    id: 'case1',
    title: 'The Varanasi Temple Manifestation',
    type: 'Intelligent Haunting',
    location: 'Varanasi, Uttar Pradesh',
    date: '2024-03-15',
    status: 'Under Investigation',
    description: 'Multiple witnesses report apparitions of ancient priests performing rituals in abandoned temple complex.',
    public: true,
    investigator: 'Dr. Priya Sharma',
    evidence: ['Audio recordings', 'Temperature readings', 'Photographs']
  },
  {
    id: 'case2',
    title: 'Rajasthan Palace Poltergeist',
    type: 'Poltergeist Activity',
    location: 'Jaipur, Rajasthan',
    date: '2024-03-10',
    status: 'Resolved',
    description: 'Furniture movement and object displacement in 18th-century palace turned hotel.',
    public: true,
    investigator: 'Vikram Singh',
    evidence: ['Video footage', 'Witness testimonies']
  },
  {
    id: 'case3',
    title: 'Mumbai Apartment Complex Shadows',
    type: 'Shadow Figures',
    location: 'Mumbai, Maharashtra',
    date: '2024-03-08',
    status: 'Under Investigation',
    description: 'Residents report dark humanoid figures moving through walls and corridors at night.',
    public: true,
    investigator: 'Anisha Patel',
    evidence: ['Security camera footage', 'EMF readings']
  },
  {
    id: 'case4',
    title: 'Kerala Backwater Voices',
    type: 'Electronic Voice Phenomena',
    location: 'Alleppey, Kerala',
    date: '2024-03-05',
    status: 'Submitted',
    description: 'Mysterious voices speaking in ancient Malayalam captured near historic waterways.',
    public: false,
    investigator: 'Ravi Menon',
    evidence: ['Audio recordings']
  },
  {
    id: 'case5',
    title: 'Pune University Library Entity',
    type: 'Intelligent Haunting',
    location: 'Pune, Maharashtra',
    date: '2024-03-01',
    status: 'Under Investigation',
    description: 'Students and staff report books moving, cold spots, and whispered warnings in the old section.',
    public: true,
    investigator: 'Dr. Meera Deshmukh',
    evidence: ['Temperature logs', 'Witness testimonies', 'Photographs']
  },
  {
    id: 'case6',
    title: 'Goa Beach House Apparitions',
    type: 'Residual Haunting',
    location: 'Goa',
    date: '2024-02-28',
    status: 'Resolved',
    description: 'Colonial-era figures seen repeatedly walking the same path on beach property.',
    public: true,
    investigator: 'Carlos D\'Souza',
    evidence: ['Photographs', 'Historical research']
  }
];

const Cases = () => {
  const [cases, setCases] = useState(mockCases);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  const caseTypes = ['All', 'Intelligent Haunting', 'Poltergeist Activity', 'Shadow Figures', 'Electronic Voice Phenomena', 'Residual Haunting', 'Attachment/Possession'];
  const statuses = ['All', 'Submitted', 'Under Investigation', 'Resolved'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted': return 'text-yellow-400 bg-yellow-400/20';
      case 'Under Investigation': return 'text-primary bg-primary/20';
      case 'Resolved': return 'text-secondary bg-secondary/20';
      default: return 'text-muted-foreground bg-white/10';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Intelligent Haunting': return 'text-purple-400 bg-purple-400/20';
      case 'Poltergeist Activity': return 'text-red-400 bg-red-400/20';
      case 'Shadow Figures': return 'text-gray-400 bg-gray-400/20';
      case 'Electronic Voice Phenomena': return 'text-blue-400 bg-blue-400/20';
      case 'Residual Haunting': return 'text-green-400 bg-green-400/20';
      default: return 'text-orange-400 bg-orange-400/20';
    }
  };

  const filteredCases = cases
    .filter(caseItem => {
      const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           caseItem.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           caseItem.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All' || caseItem.type === selectedType;
      const matchesStatus = selectedStatus === 'All' || caseItem.status === selectedStatus;
      
      return matchesSearch && matchesType && matchesStatus && caseItem.public;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

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
            Case Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Documented supernatural investigations across India. Each case represents 
            careful research and analysis by our expert team.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search cases by title, location, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
              >
                {caseTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="text-center p-4 rounded-xl glass border border-white/10">
            <div className="text-2xl font-bold text-primary">{cases.filter(c => c.public).length}</div>
            <div className="text-sm text-muted-foreground">Total Cases</div>
          </div>
          <div className="text-center p-4 rounded-xl glass border border-white/10">
            <div className="text-2xl font-bold text-yellow-400">{cases.filter(c => c.status === 'Under Investigation').length}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
          <div className="text-center p-4 rounded-xl glass border border-white/10">
            <div className="text-2xl font-bold text-secondary">{cases.filter(c => c.status === 'Resolved').length}</div>
            <div className="text-sm text-muted-foreground">Resolved</div>
          </div>
          <div className="text-center p-4 rounded-xl glass border border-white/10">
            <div className="text-2xl font-bold text-primary">{new Set(cases.map(c => c.location.split(',')[1]?.trim())).size}</div>
            <div className="text-sm text-muted-foreground">States</div>
          </div>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/cases/${caseItem.id}`}>
                <div className="p-6 rounded-2xl glass border border-white/10 transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] cursor-pointer">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(caseItem.type)}`}>
                          {caseItem.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(caseItem.status)}`}>
                          {caseItem.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h3>
                    </div>
                    <Eye className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Location and Date */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {caseItem.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(caseItem.date).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {caseItem.description}
                  </p>

                  {/* Evidence */}
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-2">Evidence:</div>
                    <div className="flex flex-wrap gap-1">
                      {caseItem.evidence.map((evidence, i) => (
                        <span key={i} className="px-2 py-1 rounded text-xs bg-white/5 text-muted-foreground">
                          {evidence}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-sm text-muted-foreground">
                      Investigator: <span className="text-primary">{caseItem.investigator}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {Math.floor((Date.now() - new Date(caseItem.date).getTime()) / (1000 * 60 * 60 * 24))} days ago
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCases.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">👻</div>
            <h3 className="text-xl font-semibold mb-2">No cases found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Submit Case CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center p-8 rounded-2xl glass border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Have a Case to Report?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experiencing supernatural activity? Our expert investigators are here to help. 
            Submit your case for professional analysis and documentation.
          </p>
          <Link 
            to="/submit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Submit Your Case
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Cases;