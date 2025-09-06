import { motion } from 'framer-motion';
import { Star, Users, Award, MapPin, Mail, Calendar, Shield, Eye, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const testimonials = [
  {
    id: 'test1',
    name: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'The Fangveil Society helped us resolve a 3-year poltergeist situation in our apartment. Their professional approach and genuine care made all the difference. Highly recommended!',
    caseType: 'Poltergeist Activity',
    date: '2024-02-15'
  },
  {
    id: 'test2', 
    name: 'Priyanka Nair',
    location: 'Kerala',
    rating: 5,
    text: 'After experiencing unexplained voices near our family property, the team provided both investigation and emotional support. Their knowledge of local history was invaluable.',
    caseType: 'Electronic Voice Phenomena',
    date: '2024-01-28'
  },
  {
    id: 'test3',
    name: 'Dr. Santosh Mehta',
    location: 'Pune, Maharashtra', 
    rating: 4,
    text: 'As a scientist, I was skeptical, but their methodical approach and use of proper equipment impressed me. They helped us understand the phenomena in our research facility.',
    caseType: 'Temperature Anomalies',
    date: '2024-01-10'
  }
];

const investigators = [
  {
    id: 'inv1',
    name: 'Dr. Priya Sharma',
    specialty: 'Ancient Religious Phenomena',
    experience: '15 years',
    casesResolved: 67,
    location: 'Varanasi, UP',
    expertise: ['Temple Manifestations', 'Sanskrit Analysis', 'Vedic Rituals', 'Historical Research'],
    bio: 'PhD in Religious Studies with specialization in ancient Indian spiritual practices. Leading expert on temple-based supernatural phenomena.',
    achievements: ['Published 23 research papers', 'Consultant to Archaeological Survey of India', 'Vedic Ritual Specialist'],
    profileImage: 'https://images.unsplash.com/photo-1594824388781-e63583d8da38?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'inv2',
    name: 'Vikram Singh',
    specialty: 'Poltergeist & Kinetic Phenomena',
    experience: '12 years', 
    casesResolved: 89,
    location: 'Jaipur, Rajasthan',
    expertise: ['Object Movement Analysis', 'EMF Investigation', 'Palace Histories', 'Royal Hauntings'],
    bio: 'Former police detective turned paranormal investigator. Expert in documenting and analyzing unexplained physical phenomena.',
    achievements: ['85% case resolution rate', 'Developed new EMF analysis protocols', 'Royal Palace Investigation Specialist'],
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'inv3',
    name: 'Anisha Patel',
    specialty: 'Shadow Entities & Urban Phenomena',
    experience: '8 years',
    casesResolved: 54,
    location: 'Mumbai, Maharashtra',
    expertise: ['Urban Hauntings', 'Shadow Figure Analysis', 'Modern Technology Interaction', 'Apartment Investigations'],
    bio: 'Technology expert specializing in modern paranormal phenomena in urban environments. Pioneer in shadow entity research.',
    achievements: ['First to document shadow-tech interaction', 'Urban Phenomena Database Creator', 'Technology Integration Specialist'],
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'inv4',
    name: 'Dr. Meera Deshmukh',
    specialty: 'Protective Entities & Knowledge Guardians',
    experience: '20 years',
    casesResolved: 78,
    location: 'Pune, Maharashtra', 
    expertise: ['Library Phenomena', 'Protective Spirits', 'Academic Investigations', 'Knowledge Preservation'],
    bio: 'Former university librarian with doctorate in Information Science. Expert on knowledge-protecting supernatural entities.',
    achievements: ['Documented 200+ library phenomena', 'Academic Paranormal Research Leader', 'Protective Entity Communication Specialist'],
    profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'inv5',
    name: 'Ravi Menon',
    specialty: 'Water-based Phenomena & EVP',
    experience: '10 years',
    casesResolved: 43,
    location: 'Alleppey, Kerala',
    expertise: ['Underwater Investigation', 'Audio Analysis', 'Coastal Phenomena', 'Ancient Voice Interpretation'],
    bio: 'Marine engineer turned paranormal investigator. Specialist in water-related supernatural phenomena and ancient voice analysis.',
    achievements: ['Underwater EVP Pioneer', 'Ancient Language Interpreter', 'Coastal Investigation Expert'],
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'inv6',
    name: 'Carlos D\'Souza',
    specialty: 'Colonial Era & Residual Hauntings',
    experience: '14 years',
    casesResolved: 61,
    location: 'Goa',
    expertise: ['Colonial History', 'Portuguese Era Research', 'Residual Phenomena', 'Beach Property Investigation'],
    bio: 'Historian and paranormal researcher specializing in colonial-era supernatural phenomena. Expert on Portuguese colonial history.',
    achievements: ['Colonial Phenomena Database', 'Portuguese Historical Consultant', 'Residual Pattern Analysis Expert'],
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  }
];

const memberBenefits = [
  {
    icon: Shield,
    title: 'Priority Investigation',
    description: 'Members receive priority scheduling for case investigations and faster response times.'
  },
  {
    icon: BookOpen,
    title: 'Exclusive Resources',
    description: 'Access to members-only ritual guides, historical documents, and investigation reports.'
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Connect with other members, share experiences, and participate in group investigations.'
  },
  {
    icon: Award,
    title: 'Training Programs',
    description: 'Participate in investigator training courses and certification programs.'
  },
  {
    icon: Eye,
    title: 'Early Access',
    description: 'First access to new cases, findings, and documentary footage before public release.'
  },
  {
    icon: Zap,
    title: 'Equipment Training',
    description: 'Learn to use professional paranormal investigation equipment through hands-on workshops.'
  }
];

const Community = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Fangveil Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join India's premier supernatural investigation society. Connect with experts, 
            access exclusive resources, and be part of groundbreaking paranormal research.
          </p>
        </motion.div>

        {/* Join CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border border-white/10"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Become a Fangveil Society Member</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Access exclusive investigations, connect with expert paranormal researchers, 
              and contribute to India's most comprehensive supernatural research database.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {memberBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl glass border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow text-white font-bold transition-all duration-300 hover:scale-105 neon-glow">
                Join Society - ₹2,999/year
              </button>
              <button className="px-8 py-4 rounded-2xl border border-secondary text-secondary font-semibold transition-all duration-300 hover:bg-secondary hover:text-black">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people we've helped across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-white/10"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Case Type */}
                <div className="mb-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-primary/20 text-primary">
                    {testimonial.caseType}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Investigator Profiles Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Investigators</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced professionals brings diverse expertise to every investigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investigators.map((investigator, index) => (
              <motion.div
                key={investigator.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl glass border border-white/10 transition-all duration-300 hover:border-primary/30 hover:scale-105">
                  {/* Profile Image */}
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-3 overflow-hidden">
                      <img 
                        src={investigator.profileImage} 
                        alt={investigator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {investigator.name}
                    </h3>
                    <p className="text-sm text-secondary font-medium">{investigator.specialty}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 rounded-xl glass">
                      <div className="text-lg font-bold text-primary">{investigator.casesResolved}</div>
                      <div className="text-xs text-muted-foreground">Cases Resolved</div>
                    </div>
                    <div className="text-center p-3 rounded-xl glass">
                      <div className="text-lg font-bold text-secondary">{investigator.experience}</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    {investigator.location}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {investigator.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {investigator.expertise.slice(0, 3).map(skill => (
                      <span key={skill} className="px-2 py-1 rounded text-xs bg-white/10 text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                    {investigator.expertise.length > 3 && (
                      <span className="px-2 py-1 rounded text-xs bg-white/10 text-muted-foreground">
                        +{investigator.expertise.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Contact Button */}
                  <button className="w-full py-2 rounded-xl border border-primary/30 text-primary text-sm font-medium transition-all duration-300 hover:bg-primary/10">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Community Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Growing Community</h2>
            <p className="text-muted-foreground">Join thousands of members across India</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl glass border border-white/10">
              <div className="text-3xl font-bold text-primary mb-2">2,847</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass border border-white/10">
              <div className="text-3xl font-bold text-secondary mb-2">847</div>
              <div className="text-sm text-muted-foreground">Cases Resolved</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass border border-white/10">
              <div className="text-3xl font-bold text-primary mb-2">28</div>
              <div className="text-sm text-muted-foreground">States Covered</div>
            </div>
            <div className="text-center p-6 rounded-2xl glass border border-white/10">
              <div className="text-3xl font-bold text-secondary mb-2">77</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl glass border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have questions about joining our community or need help with a supernatural situation? 
              Our team is here to assist you 24/7.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <Mail className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">contact@fangveil.org</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <Users className="w-6 h-6 text-secondary" />
                <div className="text-left">
                  <div className="font-semibold">Community</div>
                  <div className="text-sm text-muted-foreground">Join Discord Server</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass">
                <Calendar className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Meetings</div>
                  <div className="text-sm text-muted-foreground">Monthly Virtual Meetups</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                Report Activity
              </Link>
              <button className="px-8 py-3 rounded-xl border border-secondary text-secondary font-semibold transition-all duration-300 hover:bg-secondary hover:text-black">
                Contact Support
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Community;