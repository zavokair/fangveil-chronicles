import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, BookOpen, Search, Filter } from 'lucide-react';

// Mock diary entries - in real app this would come from Supabase
const mockDiaryEntries = [
  {
    id: 'entry1',
    date: '2024-03-15',
    time: '23:45',
    investigator: 'Dr. Priya Sharma',
    location: 'Varanasi Temple Complex',
    title: 'Manifestation During Midnight Hour',
    entry: `The temperature dropped suddenly to 8°C below ambient at exactly 23:30. **Sanskrit chanting** began emanating from the main sanctum, despite the temple being sealed for over 200 years. 

EMF readings spiked to 7.2 mG near the ritual fire pit. Through infrared imaging, we observed three distinct humanoid forms performing what appeared to be **traditional Vedic ceremonies**.

Most remarkable was their apparent awareness of our presence. The lead figure, dressed in what seemed to be ancient priestly robes, acknowledged our team with a traditional namaste gesture before continuing the ritual.

*Recording equipment captured 4 minutes and 12 seconds of clear Sanskrit hymns that our linguistic expert confirms match ancient fire rituals from the Atharvaveda.*`,
    mood: 'Awe-struck',
    weatherConditions: 'Clear night, no wind',
    equipment: ['EMF Detector', 'Infrared Camera', 'Digital Audio Recorder', 'Thermometer'],
    tags: ['manifestation', 'temperature-anomaly', 'audio-phenomena', 'intelligent-response']
  },
  {
    id: 'entry2',
    date: '2024-03-12',
    time: '02:15',
    investigator: 'Vikram Singh',
    location: 'Jaipur Palace - East Wing',
    title: 'Poltergeist Activity Escalation',
    entry: `Tonight marked the **most intense poltergeist activity** we've documented at this location. Heavy furniture movement began at 02:00, with the antique mahogany desk sliding across the room three times.

Security cameras captured a crystal chandelier swaying violently despite no air movement. Most disturbing was the systematic opening and closing of every door in the corridor - **17 doors in perfect sequence**, each waiting exactly 3 seconds before the next.

No electromagnetic anomalies detected, suggesting this is purely kinetic manifestation. The pattern suggests intelligence and purpose rather than random energy discharge.

*Personal note: I felt a distinct presence watching us throughout the investigation. Not malevolent, but definitely assertive about territorial boundaries.*`,
    mood: 'Focused determination',
    weatherConditions: 'Monsoon approaching, high humidity',
    equipment: ['Motion Sensors', 'Security Cameras', 'EMF Scanner', 'Digital Thermometer'],
    tags: ['poltergeist', 'object-movement', 'intelligent-pattern', 'territorial-behavior']
  },
  {
    id: 'entry3',
    date: '2024-03-08',
    time: '04:30',
    investigator: 'Anisha Patel',
    location: 'Mumbai Apartment Complex - 7th Floor',
    title: 'Shadow Figure Documentation',
    entry: `Breakthrough documentation of **shadow entity behavior patterns**. Between 04:15 and 04:45, we recorded consistent manifestations of a tall, humanoid shadow moving through the hallway.

Unlike typical shadow figures, this entity demonstrated:
- **Interaction with physical environment** (elevator buttons pressed)
- **Consistent route pattern** (same path for 6 consecutive appearances)
- **Response to human presence** (paused when residents appeared)

Thermal imaging revealed no heat signature, but motion sensors triggered accurately. Most intriguing: the shadow appeared to use the elevator, with security footage showing buttons being pressed on floors 3, 5, and 7.

*This challenges our current understanding of shadow entity capabilities. Reviewing all historical data for similar technological interaction patterns.*`,
    mood: 'Scientific excitement',
    weatherConditions: 'Heavy rain, storm activity',
    equipment: ['Thermal Camera', 'Motion Detectors', 'Security System Access', 'Full Spectrum Camera'],
    tags: ['shadow-figure', 'technology-interaction', 'pattern-behavior', 'elevator-activity']
  },
  {
    id: 'entry4',
    date: '2024-03-05',
    time: '05:45',
    investigator: 'Ravi Menon',
    location: 'Alleppey Backwaters - Historic Site',
    title: 'Ancient Malayalam Voice Phenomena',
    entry: `Dawn investigation yielded **extraordinary EVP recordings** in archaic Malayalam dialect. Our linguistic consultant, Prof. Nair, confirms the language structure dates to approximately 16th century.

The voices emerged from the water itself, with hydrophones detecting sound origination 2-3 meters below the surface. No underwater activity or disturbance visible.

Translation reveals fragments of what appears to be a **funeral lament** mentioning "the Dutch ships" and "souls lost to foreign waters." Historical research confirms Dutch trading vessels sank in this location during the 1650s.

*Most haunting element: the voices called out modern names of current residents, as if bridging centuries to deliver messages to their descendants.*`,
    mood: 'Deeply moved',
    weatherConditions: 'Misty dawn, calm waters',
    equipment: ['Hydrophones', 'Digital Audio Recorder', 'Underwater Camera', 'Historical Maps'],
    tags: ['electronic-voice-phenomena', 'underwater-source', 'historical-connection', 'ancestral-communication']
  },
  {
    id: 'entry5',
    date: '2024-03-01',
    time: '01:20',
    investigator: 'Dr. Meera Deshmukh',
    location: 'Pune University - Old Library Section',
    title: 'Protective Entity Encounter',
    entry: `Tonight's investigation revealed what appears to be a **protective presence** in the library's rare manuscript section. Cold spots (12°C below ambient) manifested whenever anyone approached the restricted historical texts.

The entity communicated through **book displacement** - specific volumes would fall open to relevant pages when questions were asked. Most remarkable: when a student accidentally triggered the fire alarm, books on fire safety procedures literally flew off shelves to his location.

EMF patterns suggest a highly organized intelligence with **deep knowledge of the library's contents**. Whispered warnings in multiple languages were recorded, all relating to proper handling of ancient texts.

*Working hypothesis: This may be the spirit of a former librarian or scholar, continuing their protective duties in death. Behavior suggests benevolent intent focused on preservation of knowledge.*`,
    mood: 'Respectful wonder',
    weatherConditions: 'Cool, dry evening',
    equipment: ['EMF Grid System', 'Multiple Audio Recorders', 'Thermal Imaging', 'Motion Mapping'],
    tags: ['protective-entity', 'knowledge-guardian', 'book-interaction', 'multilingual-communication']
  },
  {
    id: 'entry6',
    date: '2024-02-28',
    time: '19:30',
    investigator: 'Carlos D\'Souza',
    location: 'Goa Colonial Beach House',
    title: 'Residual History Playback',
    entry: `Witnessed **residual manifestations** of colonial-era activities during sunset hours. The same sequence repeats nightly: Portuguese colonial officer walking the veranda, checking pocket watch, then gazing toward the harbor.

Unlike intelligent hauntings, this figure shows **no awareness of observers**. Actions are mechanical, precise, unchanging. Duration: exactly 7 minutes and 15 seconds each manifestation.

Historical research confirms Captain Fernando Silva lived here 1847-1883, waiting nightly for ships from Lisbon that would bring news of his family. He died of fever still watching for word that never came.

*The residual energy is so strong that even the wooden floorboards show wear patterns matching his nightly path. Time itself seems trapped in these moments of longing.*`,
    mood: 'Melancholic empathy',
    weatherConditions: 'Clear sunset, ocean breeze',
    equipment: ['Full Spectrum Photography', 'Historical Documents', 'Floor Analysis Tools', 'Timeline Mapping'],
    tags: ['residual-haunting', 'colonial-history', 'repetitive-behavior', 'emotional-imprint']
  },
  {
    id: 'entry7',
    date: '2024-02-25',
    time: '00:00',
    investigator: 'Arjun Reddy',
    location: 'Delhi Red Fort - Emperor\'s Quarters',
    title: 'Midnight Anniversary Manifestation',
    entry: `On the anniversary of **Bahadur Shah Zafar's exile** (exact date 200 years ago), the Red Fort experienced unprecedented paranormal activity. At the stroke of midnight, sounds of royal court proceedings echoed through the emperor's former quarters.

Recorded audio includes:
- **Tabla and sitar** playing classical ragas
- **Urdu poetry recitations** in royal court style  
- **Footsteps of multiple individuals** in coordinated patterns
- **Hushed conversations** about British forces approaching

Most extraordinary: The scent of **rose water and sandalwood** filled the air, despite no source present. Chemical analysis detected actual fragrance compounds with no identifiable origin.

*This appears to be an anniversary imprint - traumatic historical events replaying on significant dates. The emotional weight of empire's end still resonates in these walls.*`,
    mood: 'Historical reverence',
    weatherConditions: 'Cold, clear night',
    equipment: ['Chemical Analysis Kit', 'Historical Audio Equipment', 'Multi-spectrum Recording', 'Fragrance Detection'],
    tags: ['anniversary-manifestation', 'royal-history', 'multi-sensory-phenomena', 'cultural-memory']
  },
  {
    id: 'entry8',
    date: '2024-02-20',
    time: '03:00',
    investigator: 'Ritika Sen',
    location: 'Kolkata Park Street Cemetery',
    title: 'Victorian Era Communication',
    entry: `Breakthrough **direct communication** with Victorian-era spirits during the traditional 'hour of the dead.' Using period-appropriate séance techniques, we established contact with multiple entities from the 1800s.

Most coherent communication came from **Margaret Thornton** (d. 1847), who provided detailed information about:
- Cholera epidemic treatments used in colonial Calcutta
- Location of buried medical records 
- Names of other individuals buried in unmarked graves
- **Warning about construction plans** threatening historic graves

Physical manifestations included **temperature drops of 15°C**, movement of séance table, and automatic writing in period-correct penmanship and ink composition.

*Verification research confirmed Margaret Thornton was indeed a British nurse who died during the 1847 cholera outbreak. Her provided information about unmarked graves proved accurate upon archaeological survey.*`,
    mood: 'Professional solemnity',
    weatherConditions: 'Foggy, humid night',
    equipment: ['Period Séance Equipment', 'Handwriting Analysis', 'Archaeological Survey Tools', 'Historical Records'],
    tags: ['direct-communication', 'victorian-spirits', 'medical-history', 'archaeological-verification']
  }
];

const Diary = () => {
  const [entries, setEntries] = useState(mockDiaryEntries);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMood, setSelectedMood] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  const moods = ['All', ...new Set(entries.map(entry => entry.mood))];
  const allTags = entries.flatMap(entry => entry.tags);
  const tags = ['All', ...new Set(allTags)];

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.entry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.investigator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMood = selectedMood === 'All' || entry.mood === selectedMood;
    const matchesTag = selectedTag === 'All' || entry.tags.includes(selectedTag);
    
    return matchesSearch && matchesMood && matchesTag;
  });

  const formatEntryText = (text: string) => {
    // Replace **bold** with proper styling
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
               .replace(/\*(.*?)\*/g, '<em class="text-secondary">$1</em>');
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Investigation Diary
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personal accounts and field notes from our investigators. Each entry captures 
            the raw experience of supernatural encounters across India.
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
                placeholder="Search diary entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
              >
                {moods.map(mood => (
                  <option key={mood} value={mood}>{mood === 'All' ? 'All Moods' : mood}</option>
                ))}
              </select>
              
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag === 'All' ? 'All Tags' : tag}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Entries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedEntry(entry)}
            >
              <div className="p-6 rounded-2xl glass border border-white/10 transition-all duration-300 hover:border-primary/30 hover:scale-[1.02]">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {entry.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(entry.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {entry.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <User className="w-4 h-4" />
                      {entry.investigator}
                    </div>
                  </div>
                  <BookOpen className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Location */}
                <div className="text-sm text-secondary mb-4 font-medium">
                  📍 {entry.location}
                </div>

                {/* Entry Preview */}
                <div className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {entry.entry.split('\n')[0]}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-full text-xs bg-white/10 text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                  {entry.tags.length > 3 && (
                    <span className="px-2 py-1 rounded-full text-xs bg-white/10 text-muted-foreground">
                      +{entry.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Mood */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Mood: <span className="text-primary">{entry.mood}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {entry.equipment.length} equipment used
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2">No entries found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Entry Detail Modal */}
        {selectedEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedEntry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedEntry.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(selectedEntry.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedEntry.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {selectedEntry.investigator}
                      </div>
                    </div>
                    <div className="text-secondary font-medium">📍 {selectedEntry.location}</div>
                  </div>
                  <button
                    onClick={() => setSelectedEntry(null)}
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Entry Text */}
                <div className="prose prose-invert max-w-none mb-6">
                  <div 
                    className="text-muted-foreground leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: formatEntryText(selectedEntry.entry) }}
                  />
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 rounded-xl glass border border-white/10">
                    <h3 className="font-semibold mb-3 text-primary">Investigation Details</h3>
                    <div className="space-y-2 text-sm">
                      <div><strong>Mood:</strong> {selectedEntry.mood}</div>
                      <div><strong>Weather:</strong> {selectedEntry.weatherConditions}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl glass border border-white/10">
                    <h3 className="font-semibold mb-3 text-secondary">Equipment Used</h3>
                    <div className="space-y-1">
                      {selectedEntry.equipment.map((eq: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {eq}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-primary">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntry.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-sm bg-white/10 text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">{entries.length}</div>
            <div className="text-sm text-muted-foreground">Total Entries</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-secondary mb-2">{new Set(entries.map(e => e.investigator)).size}</div>
            <div className="text-sm text-muted-foreground">Investigators</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-primary mb-2">{new Set(entries.map(e => e.location.split(' - ')[0])).size}</div>
            <div className="text-sm text-muted-foreground">Locations</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="text-3xl font-bold text-secondary mb-2">{new Set(allTags).size}</div>
            <div className="text-sm text-muted-foreground">Phenomena Types</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Diary;