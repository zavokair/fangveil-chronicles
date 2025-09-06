import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Upload, CheckCircle, AlertTriangle, FileText, Camera, MapPin } from 'lucide-react';

const SubmitCase = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    anonymous: false,
    location: '',
    date: '',
    type: '',
    description: '',
    publicCase: false,
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;
  const activityTypes = [
    'Residual Haunting',
    'Intelligent Haunting', 
    'Poltergeist Activity',
    'Shadow Figures',
    'Attachment/Possession',
    'Apparition Sighting',
    'Electronic Voice Phenomena (EVP)',
    'Temperature Anomalies',
    'Object Movement',
    'Other'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In real app, this would submit to Supabase
    console.log('Submitting case:', formData, uploadedFile);
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary-glow rounded-full flex items-center justify-center mx-auto mb-6 emerald-glow">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Case Submitted Successfully</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thank you for your submission. Your case has been assigned ID: <strong className="text-primary">FS-{Date.now().toString().slice(-6)}</strong>
            <br /><br />
            Our investigation team will review your case within 24-48 hours. 
            You will receive an email update once the initial assessment is complete.
          </p>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  name: '', email: '', anonymous: false, location: '', 
                  date: '', type: '', description: '', publicCase: false
                });
                setUploadedFile(null);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-semibold"
            >
              Submit Another Case
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl border border-secondary text-secondary font-semibold hover:bg-secondary hover:text-black transition-colors"
              onClick={() => window.location.href = '/cases'}
            >
              View All Cases
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Submit a Case
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Report supernatural activity for investigation by our expert team. 
            All submissions are treated with confidentiality and respect.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  step <= currentStep 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                    : 'glass border border-white/20 text-muted-foreground'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-4 rounded transition-all duration-300 ${
                    step < currentStep ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Basic Info</span>
            <span>Details & Media</span>
            <span>Review & Submit</span>
          </div>
        </motion.div>

        {/* Form Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.02] rounded-2xl border border-white/10 p-8"
        >
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Basic Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Full name"
                    disabled={formData.anonymous}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass border border-white/10">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={formData.anonymous}
                  onChange={(e) => handleInputChange('anonymous', e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-transparent focus:ring-primary"
                />
                <label htmlFor="anonymous" className="text-sm">
                  Submit anonymously (your identity will not be shared)
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="City, State or detailed address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Incident</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full p-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Type of Activity</label>
                <select
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="w-full p-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none"
                >
                  <option value="">Select activity type</option>
                  {activityTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Camera className="w-6 h-6 text-primary" />
                Details & Evidence
              </h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload Media (Optional)
                </label>
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept="image/*,video/*,audio/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Click to upload images, videos, or audio recordings
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: JPG, PNG, MP4, MP3, WAV (Max 50MB)
                    </p>
                  </label>
                  {uploadedFile && (
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary">
                        Uploaded: {uploadedFile.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Detailed Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={8}
                  className="w-full p-3 rounded-xl glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  placeholder="Please provide a detailed account of what happened. Include time of day, weather conditions, who was present, what was seen/heard/felt, and any relevant background information..."
                />
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass border border-white/10">
                <input
                  type="checkbox"
                  id="public"
                  checked={formData.publicCase}
                  onChange={(e) => handleInputChange('publicCase', e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-transparent focus:ring-primary"
                />
                <label htmlFor="public" className="text-sm">
                  Make this case public (visible in our case archive after investigation)
                </label>
              </div>

              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-1">Important Note</h4>
                    <p className="text-sm text-orange-300">
                      All submissions are reviewed by our team before investigation. 
                      False or fabricated reports will be rejected. We take every genuine report seriously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Review & Submit
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl glass">
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <p className="text-sm text-muted-foreground">
                      {formData.anonymous ? 'Anonymous submission' : formData.name}
                      {formData.email && <><br />{formData.email}</>}
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl glass">
                    <h4 className="font-semibold mb-2">Incident Details</h4>
                    <p className="text-sm text-muted-foreground">
                      {formData.type}
                      <br />{formData.location}
                      <br />{formData.date}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass">
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {formData.description || 'No description provided'}
                  </p>
                </div>

                {uploadedFile && (
                  <div className="p-4 rounded-xl glass">
                    <h4 className="font-semibold mb-2">Uploaded Evidence</h4>
                    <p className="text-sm text-muted-foreground">
                      {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-xl glass">
                  <h4 className="font-semibold mb-2">Visibility</h4>
                  <p className="text-sm text-muted-foreground">
                    {formData.publicCase ? 
                      'This case will be made public after investigation' : 
                      'This case will remain private'
                    }
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <p className="text-sm text-secondary">
                  By submitting this case, you confirm that all information provided is truthful 
                  and you give permission for the Fangveil Society to investigate and document this incident.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                currentStep === 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'glass border border-white/20 hover:border-white/40'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-secondary to-secondary-glow text-black font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Case'}
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubmitCase;