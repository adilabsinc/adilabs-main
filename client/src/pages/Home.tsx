import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Building2,
  Users,
  TrendingUp,
  Cpu,
  Database,
  Settings
} from 'lucide-react';
import CountUp from 'react-countup';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Revolutionizing Businesses with Tech Empowerment';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI Agentic Models',
      description: 'Pre-configured AI models tailored for industry-specific tasks and workflows'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable Kubernetes orchestration and cloud-native solutions'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures and risk mitigation strategies'
    },
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Digital Process Automation (DPA) and Power Automate solutions'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Comprehensive data analysis and system integration interfaces'
    },
    {
      icon: Building2,
      title: 'SaaS Development',
      description: 'Custom SaaS platforms for enterprise and infrastructure companies'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://www.bisinfotech.com/wp-content/uploads/2025/05/NTT-DATA-Launches-Smart-AI-Agent-Ecosystem-Initiative.jpg" alt="Tech Background" className="w-full h-full object-cover object-center opacity-60 blur-sm" />
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="absolute inset-0 tech-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ADILABS INC
              </span>
            </h1>
            <div className="h-16 mb-8">
              <p className="text-xl md:text-2xl text-gray-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We leverage emerging technologies like AI and blockchain to deliver groundbreaking solutions 
              that drive efficiency, scalability, and security for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Our Platform</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
            {/* Neon Icon Cards Row (now inside hero, after buttons) */}
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[{
                    icon: Brain,
                    title: 'AI-Driven Insights',
                    desc: 'Smarter decisions with real-time data'
                  }, {
                    icon: Zap,
                    title: 'Instant Automation',
                    desc: 'Boost productivity with smart workflows'
                  }, {
                    icon: Users,
                    title: 'Team Collaboration',
                    desc: 'Connect, share, and grow together'
                  }].map((card, idx) => (
                    <div key={idx} className="bg-gradient-to-b from-purple-800/60 to-blue-900/60 rounded-xl p-8 flex flex-col items-center shadow-xl border border-white/10 relative group">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-purple-400/30 group-hover:scale-105 transition-transform">
                          <card.icon className="w-12 h-12 text-white drop-shadow-lg" />
                        </div>
                      </div>
                      <div className="mt-16 text-center">
                        <div className="text-lg font-semibold text-white mb-2">{card.title}</div>
                        <div className="text-gray-300 text-sm">{card.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-16 h-16 bg-blue-500/20 rounded-lg backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-20 bg-[#181828] border-t-4 border-purple-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Icon + Text + Image */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <span className="uppercase tracking-widest text-xs text-gray-300 font-semibold"> | Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              We are a <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-extrabold">group of experts</span> looking to help companies leverage technology to do more than they had ever thought possible.
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl">
              We do this through a number of services to provide comprehensive solutions for your business. Scroll down to read about what we can do for you.
            </p>
            <div className="mt-8">
              <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="Team" className="rounded-lg border-4 border-purple-500 shadow-2xl rotate-[-4deg] w-80" />
            </div>
          </div>
          {/* Right: Values + Signature */}
          <div className="flex-1 flex flex-col gap-8 items-start justify-center mt-12 md:mt-0">
            <ul className="space-y-4 text-gray-200 text-base">
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-400" /> We always focus on technical excellence</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-400" /> Wherever you're going, we bring ideas and excitement</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-purple-400" /> We're consultants, guides, and partners for brands</li>
            </ul>
            <div className="mt-8">
              <div className="text-purple-300 font-semibold">Ikram Ahmed</div>
              <div className="text-gray-400 text-sm mb-2">CTO, Prosols</div>
              {/* SVG Signature */}
              <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30 Q 30 10, 50 30 T 90 30 Q 110 10, 130 30 T 150 30" stroke="#B983FF" strokeWidth="3" fill="none" filter="url(#glow)" />
                <defs>
                  <filter id="glow" x="-10" y="-10" width="180" height="60">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#181828] rounded-2xl shadow-2xl py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex-1 text-center relative group transition-transform duration-300 hover:scale-105`}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
                  <CountUp
                    end={parseInt(stat.number)}
                    duration={2}
                    suffix={stat.number.slice(parseInt(stat.number).toString().length)}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="text-gray-400 text-sm md:text-base tracking-wide">{stat.label}</div>
                {/* Vertical Divider */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-12 border-r border-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 dark:bg-[#232336]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Solutions & Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations
            </p>
          </motion.div>

          {/* Horizontal Scrolling Features */}
          <div
            className="relative overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
          >
            <motion.div
              className="flex gap-8 items-stretch w-max animate-none"
              style={{
                willChange: 'transform',
                cursor: 'grab',
              }}
              animate={{ x: [0, -((features.length) * 340)] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 24,
                ease: 'linear',
              }}
              whileHover={{
                transition: { duration: 0 },
                animationPlayState: 'paused',
              }}
            >
              {[...features, ...features].map((feature, index) => (
                <motion.div
                  key={feature.title + index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[320px] max-w-xs flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800"
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Flagship SaaS Platform
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Tailored for large civil and infrastructure companies in metro and railway sectors.
              </p>
              <div className="space-y-4">
                {[
                  'AI agentic models pre-configured for industry tasks',
                  'CBS (Cost Breakdown Structure) Reports',
                  'Automated Purchase Orders & Change Orders',
                  'Labor, Equipment, and Material Tracking',
                  'Role-based approval systems',
                  'AI assistant embedded across workflows'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/products">
                <motion.button 
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/20 rounded-full">
                      <div className="h-4 bg-white/40 rounded-full w-3/4"></div>
                    </div>
                    <div className="h-4 bg-white/20 rounded-full">
                      <div className="h-4 bg-white/40 rounded-full w-1/2"></div>
                    </div>
                    <div className="h-4 bg-white/20 rounded-full">
                      <div className="h-4 bg-white/40 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-sm opacity-80">AI Processing...</span>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-20 bg-[#181828]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Customer stories</h2>
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"><span className="sr-only">Previous</span><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#B983FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"><span className="sr-only">Next</span><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#B983FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#232336] rounded-2xl p-8 shadow-lg flex flex-col items-start relative">
              <div className="absolute -top-10 left-8">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Elizabeth Taylor" className="w-20 h-20 rounded-full border-4 border-purple-400 object-cover shadow-xl" />
              </div>
              <div className="mt-12">
                <p className="text-gray-200 mb-6">It has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling.</p>
                <div className="font-bold text-white">Elizabeth Taylor</div>
                <div className="text-gray-400 text-sm">Product Manager</div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-[#232336] rounded-2xl p-8 shadow-lg flex flex-col items-start relative">
              <div className="absolute -top-10 left-8">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Ashley Watson" className="w-20 h-20 rounded-full border-4 border-purple-400 object-cover shadow-xl" />
              </div>
              <div className="mt-12">
                <p className="text-gray-200 mb-6">I appreciate the flexibility it provides, allowing me to adjust parameters and fine-tune the generated designs to meet my specific requirements.</p>
                <div className="font-bold text-white">Ashley Watson</div>
                <div className="text-gray-400 text-sm">Product Designer</div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-[#232336] rounded-2xl p-8 shadow-lg flex flex-col items-start relative">
              <div className="absolute -top-10 left-8">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Caleb Jones" className="w-20 h-20 rounded-full border-4 border-purple-400 object-cover shadow-xl" />
              </div>
              <div className="mt-12">
                <p className="text-gray-200 mb-6">The AI tool's speed and efficiency are impressive. It rapidly generates multiple design options, saving me valuable time and effort in the ideation phase.</p>
                <div className="font-bold text-white">Caleb Jones</div>
                <div className="text-gray-400 text-sm">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the revolution of tech empowerment. Let us help you harness the power of AI, 
              blockchain, and cloud technologies to drive your business forward.
            </p>
            <Link href="/contact">
              <motion.button 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}