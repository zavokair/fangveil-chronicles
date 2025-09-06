import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Eye, Calendar, Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for map locations
const locations = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    coordinates: { x: 65, y: 45 }, // Percentage coordinates on India map
    cases: [
      { id: 'case1', title: 'Temple Manifestation', type: 'Intelligent Haunting', status: 'Active' },
      { id: 'case9', title: 'Ganga Ghats Voices', type: 'Electronic Voice Phenomena', status: 'Resolved' }
    ],
    totalCases: 23,
    activeCases: 3,
    lastActivity: '2024-03-15'
  },
  {
    id: 'jaipur',
    name: 'Jaipur', 
    state: 'Rajasthan',
    coordinates: { x: 45, y: 40 },
    cases: [
      { id: 'case2', title: 'Palace Poltergeist', type: 'Poltergeist Activity', status: 'Resolved' },
      { id: 'case10', title: 'Fort Shadow Figures', type: 'Shadow Figures', status: 'Active' }
    ],
    totalCases: 18,
    activeCases: 2,
    lastActivity: '2024-03-10'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra', 
    coordinates: { x: 40, y: 60 },
    cases: [
      { id: 'case3', title: 'Apartment Shadows', type: 'Shadow Figures', status: 'Active' },
      { id: 'case11', title: 'Victorian Manor Spirit', type: 'Intelligent Haunting', status: 'Active' }
    ],
    totalCases: 31,
    activeCases: 5,
    lastActivity: '2024-03-08'
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    coordinates: { x: 42, y: 62 },
    cases: [
      { id: 'case5', title: 'University Library Entity', type: 'Intelligent Haunting', status: 'Active' },
      { id: 'case12', title: 'Research Lab Anomalies', type: 'Poltergeist Activity', status: 'Submitted' }
    ],
    totalCases: 15,
    activeCases: 2,
    lastActivity: '2024-03-01'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    coordinates: { x: 55, y: 35 },
    cases: [
      { id: 'case7', title: 'Red Fort Manifestations', type: 'Residual Haunting', status: 'Active' },
      { id: 'case13', title: 'Metro Station Voices', type: 'Electronic Voice Phenomena', status: 'Resolved' }
    ],
    totalCases: 27,
    activeCases: 4,
    lastActivity: '2024-02-25'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    coordinates: { x: 70, y: 50 },
    cases: [
      { id: 'case8', title: 'Park Street Cemetery', type: 'Intelligent Haunting', status: 'Resolved' },
      { id: 'case14', title: 'Victoria Memorial Apparitions', type: 'Residual Haunting', status: 'Active' }
    ],
    totalCases: 19,
    activeCases: 2,
    lastActivity: '2024-02-20'
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    coordinates: { x: 38, y: 68 },
    cases: [
      { id: 'case6', title: 'Beach House Apparitions', type: 'Residual Haunting', status: 'Resolved' },
      { id: 'case15', title: 'Church Bell Phenomena', type: 'Electronic Voice Phenomena', status: 'Active' }
    ],
    totalCases: 12,
    activeCases: 1,
    lastActivity: '2024-02-28'
  },
  {
    id: 'kerala',
    name: 'Alleppey',
    state: 'Kerala',
    coordinates: { x: 45, y: 80 },
    cases: [
      { id: 'case4', title: 'Backwater Voices', type: 'Electronic Voice Phenomena', status: 'Submitted' },
      { id: 'case16', title: 'Houseboat Hauntings', type: 'Intelligent Haunting', status: 'Active' }
    ],
    totalCases: 8,
    activeCases: 2,
    lastActivity: '2024-03-05'
  }
];

const MapPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [filterType, setFilterType] = useState('All');

  const caseTypes = ['All', 'Intelligent Haunting', 'Poltergeist Activity', 'Shadow Figures', 'Electronic Voice Phenomena', 'Residual Haunting'];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-primary bg-primary/20';
      case 'Resolved': return 'text-secondary bg-secondary/20';
      case 'Submitted': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-muted-foreground bg-white/10';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Intelligent Haunting': return 'text-purple-400';
      case 'Poltergeist Activity': return 'text-red-400';
      case 'Shadow Figures': return 'text-gray-400';
      case 'Electronic Voice Phenomena': return 'text-blue-400';
      case 'Residual Haunting': return 'text-green-400';
      default: return 'text-orange-400';
    }
  };

  const filteredLocations = locations.filter(location => {
    if (filterType === 'All') return true;
    return location.cases.some(case_ => case_.type === filterType);
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
            Investigation Map
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore supernatural hotspots across India. Each location represents documented 
            paranormal activity investigated by our expert team.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
            >
              {caseTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* India Map Background */}
          <div className="relative mx-auto max-w-4xl">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl border border-white/10 relative overflow-hidden">
              {/* Stylized India outline */}
              <svg 
                viewBox="0 0 400 500" 
                className="absolute inset-0 w-full h-full opacity-20"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              >
                <path d="M200 50 C250 60, 350 120, 380 200 C390 250, 370 300, 340 350 C320 400, 280 450, 200 480 C120 450, 80 400, 60 350 C30 300, 10 250, 20 200 C50 120, 150 60, 200 50 Z" />
              </svg>

              {/* Location Pins */}
              {filteredLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  {/* Pin */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 emerald-glow">
                      <div className="absolute inset-1 bg-white rounded-full" />
                    </div>
                    
                    {/* Pulse animation */}
                    <div className="absolute inset-0 w-6 h-6 bg-primary/30 rounded-full animate-ping" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                        <div className="font-semibold">{location.name}</div>
                        <div className="text-xs text-gray-300">{location.activeCases} active cases</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-6 p-4 rounded-xl glass border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <span className="text-sm text-muted-foreground">Investigation Site</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
              <span className="text-sm text-muted-foreground">Active Cases</span>
            </div>
          </div>
        </motion.div>

        {/* Location List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedLocation(location)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.state}</p>
                </div>
                <MapPin className="w-5 h-5 text-primary" />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">{location.totalCases}</div>
                  <div className="text-xs text-muted-foreground">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">{location.activeCases}</div>
                  <div className="text-xs text-muted-foreground">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">{location.totalCases - location.activeCases}</div>
                  <div className="text-xs text-muted-foreground">Resolved</div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground mb-3">
                Last Activity: {new Date(location.lastActivity).toLocaleDateString()}
              </div>

              <div className="space-y-2">
                {location.cases.slice(0, 2).map(case_ => (
                  <div key={case_.id} className="flex items-center justify-between text-sm">
                    <span className={`${getTypeColor(case_.type)}`}>{case_.title}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(case_.status)}`}>
                      {case_.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Details Modal */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full glass rounded-2xl border border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedLocation.name}</h2>
                    <p className="text-muted-foreground">{selectedLocation.state}</p>
                  </div>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl glass">
                    <div className="text-2xl font-bold text-primary">{selectedLocation.totalCases}</div>
                    <div className="text-sm text-muted-foreground">Total Cases</div>
                  </div>
                  <div className="text-center p-4 rounded-xl glass">
                    <div className="text-2xl font-bold text-yellow-400">{selectedLocation.activeCases}</div>
                    <div className="text-sm text-muted-foreground">Active</div>
                  </div>
                  <div className="text-center p-4 rounded-xl glass">
                    <div className="text-2xl font-bold text-secondary">{selectedLocation.totalCases - selectedLocation.activeCases}</div>
                    <div className="text-sm text-muted-foreground">Resolved</div>
                  </div>
                </div>

                {/* Recent Cases */}
                <h3 className="text-lg font-semibold mb-4">Recent Cases</h3>
                <div className="space-y-3 mb-6">
                  {selectedLocation.cases.map((case_: any) => (
                    <div key={case_.id} className="flex items-center justify-between p-3 rounded-xl glass">
                      <div>
                        <div className="font-medium">{case_.title}</div>
                        <div className={`text-sm ${getTypeColor(case_.type)}`}>{case_.type}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(case_.status)}`}>
                          {case_.status}
                        </span>
                        <Link 
                          to={`/cases/${case_.id}`}
                          className="p-1 rounded hover:bg-white/10 transition-colors"
                          onClick={() => setSelectedLocation(null)}
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Link 
                    to="/cases"
                    onClick={() => setSelectedLocation(null)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold text-center transition-all duration-300 hover:scale-105"
                  >
                    View All Cases
                  </Link>
                  <Link 
                    to="/submit"
                    onClick={() => setSelectedLocation(null)}
                    className="flex-1 py-3 rounded-xl border border-secondary text-secondary font-semibold text-center hover:bg-secondary hover:text-black transition-colors"
                  >
                    Report Activity
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">{locations.length}</div>
            <div className="text-sm text-muted-foreground">Active Locations</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{locations.reduce((sum, loc) => sum + loc.activeCases, 0)}</div>
            <div className="text-sm text-muted-foreground">Active Cases</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-secondary mb-2">{locations.reduce((sum, loc) => sum + loc.totalCases, 0)}</div>
            <div className="text-sm text-muted-foreground">Total Cases</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">{new Set(locations.map(loc => loc.state)).size}</div>
            <div className="text-sm text-muted-foreground">States Covered</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MapPage;