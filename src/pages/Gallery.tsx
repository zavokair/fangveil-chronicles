import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Video, Headphones, Play, Download, Eye, Calendar, MapPin } from 'lucide-react';

// Mock data - in real app this would come from Supabase
const mockGalleryItems = {
  photos: [
    {
      id: 'p1',
      title: 'Varanasi Temple Orb',
      location: 'Varanasi, UP',
      date: '2024-03-15',
      description: 'Unexplained light orb captured during morning investigation',
      thumbnail: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=300&fit=crop',
      caseId: 'case1'
    },
    {
      id: 'p2', 
      title: 'Shadow Figure in Palace',
      location: 'Jaipur, Rajasthan',
      date: '2024-03-10',
      description: 'Dark humanoid silhouette photographed in abandoned palace corridor',
      thumbnail: 'https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=400&h=300&fit=crop',
      caseId: 'case2'
    },
    {
      id: 'p3',
      title: 'Mumbai Apartment Anomaly',
      location: 'Mumbai, Maharashtra', 
      date: '2024-03-08',
      description: 'Infrared camera captures unexplained heat signature in empty hallway',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2ac3?w=400&h=300&fit=crop',
      caseId: 'case3'
    },
    {
      id: 'p4',
      title: 'Kerala Waterway Mist',
      location: 'Alleppey, Kerala',
      date: '2024-03-05', 
      description: 'Unusual mist formation with faces visible in vapor patterns',
      thumbnail: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop',
      caseId: 'case4'
    },
    {
      id: 'p5',
      title: 'Pune Library Cold Spot',
      location: 'Pune, Maharashtra',
      date: '2024-03-01',
      description: 'Thermal imaging reveals significant temperature drop in reading area',
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      caseId: 'case5'
    },
    {
      id: 'p6',
      title: 'Goa Beach House Apparition',
      location: 'Goa',
      date: '2024-02-28',
      description: 'Translucent figure captured walking along historic beachfront',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      caseId: 'case6'
    },
    {
      id: 'p7',
      title: 'Delhi Fort Manifestation',
      location: 'Delhi',
      date: '2024-02-25',
      description: 'Multiple orbs and light anomalies during night investigation',
      thumbnail: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      caseId: 'case7'
    },
    {
      id: 'p8',
      title: 'Kolkata Cemetery Energy',
      location: 'Kolkata, West Bengal',
      date: '2024-02-20',
      description: 'Electromagnetic field visualization shows unusual energy patterns',
      thumbnail: 'https://images.unsplash.com/photo-1520637736862-4d17d17f17d3?w=400&h=300&fit=crop',
      caseId: 'case8'
    }
  ],
  videos: [
    {
      id: 'v1',
      title: 'Poltergeist Activity Recording',
      location: 'Jaipur, Rajasthan',
      date: '2024-03-10',
      description: 'Security camera footage showing unexplained object movement',
      thumbnail: 'https://images.unsplash.com/photo-1489599188824-fcba1c4e45bb?w=400&h=300&fit=crop',
      duration: '3:45',
      caseId: 'case2'
    },
    {
      id: 'v2',
      title: 'Shadow Figure Movement',
      location: 'Mumbai, Maharashtra',
      date: '2024-03-08',
      description: 'Hallway surveillance captures dark entity moving through walls',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      duration: '2:12',
      caseId: 'case3'
    },
    {
      id: 'v3',
      title: 'Temple Manifestation Event',
      location: 'Varanasi, UP',
      date: '2024-03-15',
      description: 'Real-time footage of apparitions performing ritual activities',
      thumbnail: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=300&fit=crop',
      duration: '8:20',
      caseId: 'case1'
    },
    {
      id: 'v4',
      title: 'EMF Spike Documentation',
      location: 'Pune, Maharashtra',
      date: '2024-03-01',
      description: 'Equipment readings during supernatural encounter',
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      duration: '5:33',
      caseId: 'case5'
    }
  ],
  audio: [
    {
      id: 'a1',
      title: 'Sanskrit Chanting EVP',
      location: 'Varanasi, UP',
      date: '2024-03-15',
      description: 'Ancient Vedic hymns recorded in empty temple at dawn',
      duration: '4:12',
      caseId: 'case1'
    },
    {
      id: 'a2',
      title: 'Kerala Waterway Voices',
      location: 'Alleppey, Kerala', 
      date: '2024-03-05',
      description: 'Mysterious voices speaking ancient Malayalam near historic site',
      duration: '2:45',
      caseId: 'case4'
    },
    {
      id: 'a3',
      title: 'Library Whispers',
      location: 'Pune, Maharashtra',
      date: '2024-03-01',
      description: 'Unintelligible whispers captured in university library after hours',
      duration: '6:18',
      caseId: 'case5'
    },
    {
      id: 'a4',
      title: 'Palace Footsteps Recording',
      location: 'Jaipur, Rajasthan',
      date: '2024-03-10', 
      description: 'Heavy footsteps and door creaking in empty palace corridors',
      duration: '3:55',
      caseId: 'case2'
    },
    {
      id: 'a5',
      title: 'Goa Beach House Voice',
      location: 'Goa',
      date: '2024-02-28',
      description: 'Colonial-era voice speaking Portuguese captured on audio',
      duration: '1:28',
      caseId: 'case6'
    },
    {
      id: 'a6',
      title: 'Delhi Fort War Sounds',
      location: 'Delhi',
      date: '2024-02-25',
      description: 'Battle sounds and war cries recorded during historical anniversary',
      duration: '7:03',
      caseId: 'case7'
    },
    {
      id: 'a7',
      title: 'Mumbai Apartment Electronic Voice',
      location: 'Mumbai, Maharashtra',
      date: '2024-03-08',
      description: 'Clear electronic voice phenomenon warning of danger',
      duration: '0:52',
      caseId: 'case3'
    },
    {
      id: 'a8',
      title: 'Kolkata Cemetery Prayers',
      location: 'Kolkata, West Bengal',
      date: '2024-02-20',
      description: 'Faint prayer chants in multiple languages recorded at midnight',
      duration: '9:15',
      caseId: 'case8'
    }
  ]
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const tabs = [
    { id: 'photos', label: 'Photos', icon: Image, count: mockGalleryItems.photos.length },
    { id: 'videos', label: 'Videos', icon: Video, count: mockGalleryItems.videos.length },
    { id: 'audio', label: 'Audio', icon: Headphones, count: mockGalleryItems.audio.length }
  ];

  const currentItems = mockGalleryItems[activeTab as keyof typeof mockGalleryItems];

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
            Evidence Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Documented evidence from our supernatural investigations across India. 
            Each piece represents careful analysis and verification by our expert team.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white/5 rounded-2xl p-2 border border-white/10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-primary to-primary-glow text-white shadow-lg' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {currentItems.map((item: any, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-2xl glass border border-white/10 transition-all duration-300 hover:border-primary/30 hover:scale-105">
                {/* Thumbnail */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  {activeTab === 'photos' && item.thumbnail && (
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {activeTab === 'videos' && (
                    <div className="w-full h-full flex items-center justify-center relative">
                      {item.thumbnail && (
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'audio' && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30">
                      <Headphones className="w-12 h-12 text-white/70" />
                    </div>
                  )}

                  {/* Duration for videos/audio */}
                  {(activeTab === 'videos' || activeTab === 'audio') && item.duration && (
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-xs text-white">
                      {item.duration}
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold mb-1 text-sm group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal/Lightbox */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full glass rounded-2xl border border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedItem.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(selectedItem.date).toLocaleDateString()}
                      </div>
                      {selectedItem.duration && (
                        <div className="flex items-center gap-1">
                          <span>Duration: {selectedItem.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Media Display */}
                <div className="bg-black/40 rounded-xl p-8 text-center mb-6">
                  {activeTab === 'photos' && selectedItem.thumbnail && (
                    <img 
                      src={selectedItem.thumbnail} 
                      alt={selectedItem.title}
                      className="max-w-full max-h-96 mx-auto rounded-lg"
                    />
                  )}
                  {activeTab === 'videos' && (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-10 h-10 text-primary ml-1" />
                        </div>
                        <p className="text-muted-foreground">Video playback would be available here</p>
                      </div>
                    </div>
                  )}
                  {activeTab === 'audio' && (
                    <div className="flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Headphones className="w-8 h-8 text-secondary" />
                        </div>
                        <p className="text-muted-foreground">Audio player would be available here</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  {selectedItem.caseId && (
                    <button 
                      onClick={() => {
                        setSelectedItem(null);
                        window.location.href = `/cases/${selectedItem.caseId}`;
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-black transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Case
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Submit Evidence CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center p-8 rounded-2xl glass border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Have Evidence to Share?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have photographs, videos, or audio recordings of supernatural phenomena, 
            our team would like to analyze and potentially feature them in our gallery.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-secondary to-secondary-glow text-black font-semibold transition-all duration-300 hover:scale-105">
            Submit Evidence
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;