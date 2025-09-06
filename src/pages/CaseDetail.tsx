import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, Eye, Clock, FileText, Camera, Headphones, Thermometer } from 'lucide-react';

// Mock data - same cases as in Cases.tsx
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
    evidence: ['Audio recordings', 'Temperature readings', 'Photographs'],
    fullDescription: `This case involves a centuries-old temple complex in Varanasi that has been abandoned for over 200 years. Local residents and occasional visitors have reported seeing translucent figures in traditional priest robes performing what appears to be ancient Vedic rituals.

The manifestations typically occur during the early morning hours (4-6 AM) and evening twilight (6-8 PM), coinciding with traditional prayer times. Witnesses describe the figures as being aware of their environment, often acknowledging observers with nods or gestures before continuing their ritual activities.

Our investigation has revealed electromagnetic anomalies in specific areas of the temple, particularly around the main sanctum and the ritual fire pit. Temperature readings show consistent cold spots of 8-12 degrees below ambient temperature in these same areas.

Historical research indicates that the temple was suddenly abandoned in 1823 following a tragic incident where three priests died during a ritual fire that got out of control. Local folklore suggests the priests continue their duties in death, unable to rest until their final ritual is completed.`,
    timeline: [
      { date: '2024-03-15', event: 'Initial report received from local residents' },
      { date: '2024-03-16', event: 'Site investigation commenced by Dr. Priya Sharma' },
      { date: '2024-03-18', event: 'EMF and temperature readings conducted' },
      { date: '2024-03-20', event: 'Historical research phase begun' },
      { date: '2024-03-22', event: 'Night observation scheduled for next week' }
    ],
    witnesses: [
      { name: 'Ramesh Gupta', role: 'Local resident', testimony: 'I see them every morning when I go for my walk. They look so real, but when I blink, they fade away.' },
      { name: 'Sister Mary Catherine', role: 'Visiting missionary', testimony: 'The peace I felt watching them was unlike anything I\'ve experienced. They seemed to be in deep communion with the divine.' },
      { name: 'Prof. Anand Mishra', role: 'Historian', testimony: 'As someone who studies temple architecture, I can confirm their movements follow traditional Agamic procedures perfectly.' }
    ],
    evidenceDetails: [
      { type: 'Audio', description: 'Sanskrit chanting recorded at 5:30 AM, matches ancient Vedic hymns', file: 'temple_chanting.mp3' },
      { type: 'Temperature', description: 'Consistent 10°C drops recorded in sanctum area during manifestations', file: 'temp_readings.csv' },
      { type: 'Photographs', description: 'Light anomalies and partial apparitions captured on infrared camera', file: 'infrared_images.zip' },
      { type: 'EMF', description: 'Electromagnetic spikes coinciding with visual manifestations', file: 'emf_data.xlsx' }
    ]
  }
  // Other cases would be here...
];

const CaseDetail = () => {
  const { id } = useParams();
  const [caseData, setCaseData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // In real app, fetch from Supabase
    const foundCase = mockCases.find(c => c.id === id);
    setCaseData(foundCase);
  }, [id]);

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">👻</div>
          <h2 className="text-2xl font-bold mb-2">Case Not Found</h2>
          <p className="text-muted-foreground mb-6">The requested case could not be found or may be private.</p>
          <Link to="/cases" className="px-6 py-3 rounded-xl bg-primary text-white font-medium">
            Back to Cases
          </Link>
        </div>
      </div>
    );
  }

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
      case 'Intelligent Haunting': return 'text-purple-400';
      case 'Poltergeist Activity': return 'text-red-400';
      case 'Shadow Figures': return 'text-gray-400';
      case 'Electronic Voice Phenomena': return 'text-blue-400';
      case 'Residual Haunting': return 'text-green-400';
      default: return 'text-orange-400';
    }
  };

  const getEvidenceIcon = (type: string) => {
    switch (type) {
      case 'Audio': return <Headphones className="w-5 h-5" />;
      case 'Temperature': return <Thermometer className="w-5 h-5" />;
      case 'Photographs': return <Camera className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'witnesses', label: 'Witnesses' }
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
            to="/cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cases
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(caseData.type)}`}>
              {caseData.type}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(caseData.status)}`}>
              {caseData.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {caseData.title}
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>{caseData.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>{new Date(caseData.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="w-5 h-5" />
              <span>{caseData.investigator}</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {caseData.description}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-b border-white/10 mb-8"
        >
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-1 text-sm font-medium transition-colors relative whitespace-nowrap ${
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
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-primary">Detailed Investigation Report</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {caseData.fullDescription}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl glass border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Investigation Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className={`px-2 py-1 rounded text-sm ${getStatusColor(caseData.status)}`}>
                        {caseData.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lead Investigator:</span>
                      <span className="text-primary">{caseData.investigator}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Days Active:</span>
                      <span>{Math.floor((Date.now() - new Date(caseData.date).getTime()) / (1000 * 60 * 60 * 24))}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl glass border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Evidence Summary</h3>
                  <div className="space-y-2">
                    {caseData.evidence.map((evidence: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{evidence}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evidence' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">Evidence Collection</h2>
              <div className="grid gap-6">
                {caseData.evidenceDetails?.map((evidence: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl glass border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/20 text-primary">
                        {getEvidenceIcon(evidence.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{evidence.type} Evidence</h3>
                        <p className="text-muted-foreground mb-4">{evidence.description}</p>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <FileText className="w-4 h-4" />
                          <span>{evidence.file}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">Investigation Timeline</h2>
              <div className="space-y-6">
                {caseData.timeline?.map((event: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2" />
                    <div className="flex-1 pb-6">
                      <div className="text-sm text-muted-foreground mb-1">
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="text-white">{event.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'witnesses' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-primary">Witness Testimonies</h2>
              <div className="grid gap-6">
                {caseData.witnesses?.map((witness: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl glass border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {witness.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{witness.name}</h3>
                        <p className="text-sm text-primary mb-3">{witness.role}</p>
                        <blockquote className="text-muted-foreground italic">
                          "{witness.testimony}"
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Contact Investigator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-2xl glass border border-white/10 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Have Information About This Case?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have additional information, evidence, or have experienced similar phenomena 
            in this area, our investigation team would like to hear from you.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold transition-all duration-300 hover:scale-105">
            Contact Investigator
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseDetail;
