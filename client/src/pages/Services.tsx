import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Code,
  CheckCircle,
  ArrowRight,
  Zap,
  Layers,
  Lock,
  Cpu
} from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Agentic Models & LLMs',
      description: 'Advanced AI solutions with pre-configured models for industry-specific tasks',
      features: [
        'Custom AI model development',
        'LLM integration and optimization',
        'Intelligent automation workflows',
        'Natural language processing',
        'Predictive analytics',
        'AI-powered decision making'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Kubernetes',
      description: 'Scalable cloud-native solutions with advanced orchestration capabilities',
      features: [
        'Kubernetes cluster management',
        'Multi-cloud architecture',
        'Auto-scaling infrastructure',
        'Container orchestration',
        'Cloud migration services',
        'DevOps automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'SaaS Application Development',
      description: 'Custom SaaS platforms tailored for enterprise and infrastructure needs',
      features: [
        'Full-stack web applications',
        'Mobile-responsive design',
        'API development',
        'Third-party integrations',
        'Performance optimization',
        'Scalable architecture'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Data Integration & Analysis',
      description: 'Comprehensive data solutions for informed business decisions',
      features: [
        'Real-time data processing',
        'ETL pipeline development',
        'Business intelligence dashboards',
        'Data warehouse solutions',
        'Analytics and reporting',
        'Data visualization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Risk Mitigation',
      description: 'Advanced security measures to protect your digital assets',
      features: [
        'Security audits and assessments',
        'Threat detection systems',
        'Compliance management',
        'Identity and access management',
        'Incident response planning',
        'Security training programs'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Digital Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      features: [
        'Workflow automation',
        'Robotic process automation (RPA)',
        'Power Automate solutions',
        'Business process optimization',
        'Integration automation',
        'Custom automation tools'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems and identify opportunities for improvement'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap tailored to your business objectives'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with agile methodologies and continuous communication'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Ongoing monitoring, optimization, and support to ensure continued success'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations 
              and drive sustainable growth through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and lasting results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Technologies We Master</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Cutting-edge tools and platforms that power our innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Kubernetes', 'Docker',
              'TensorFlow', 'PyTorch', 'Blockchain', 'Ethereum', 'MongoDB', 'PostgreSQL'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <Link href="/contact">
              <motion.button 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}