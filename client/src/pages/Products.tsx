import { motion } from 'framer-motion';
import { 
  Building2, 
  Brain, 
  FileText, 
  ShoppingCart, 
  Users, 
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Settings,
  Clock
} from 'lucide-react';
import { Link } from 'wouter';

export default function Products() {
  const platformFeatures = [
    {
      icon: Brain,
      title: 'AI Agentic Models',
      description: 'Pre-configured AI models tailored specifically for civil and infrastructure industry tasks'
    },
    {
      icon: FileText,
      title: 'CBS Reports',
      description: 'Comprehensive Cost Breakdown Structure reports with real-time analytics'
    },
    {
      icon: ShoppingCart,
      title: 'Automated Orders',
      description: 'Automated Purchase Orders and Change Orders with intelligent workflow management'
    },
    {
      icon: BarChart3,
      title: 'Resource Tracking',
      description: 'Advanced tracking for Labor, Equipment, and Material resources across projects'
    },
    {
      icon: Users,
      title: 'Role-based Approvals',
      description: 'Sophisticated approval systems with customizable role-based permissions'
    },
    {
      icon: Zap,
      title: 'AI Assistant',
      description: 'Intelligent AI assistant embedded across all workflows for enhanced productivity'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual processes by up to 75% with intelligent automation',
      percentage: '75%'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through optimized resource management',
      percentage: '40%'
    },
    {
      title: 'Faster Delivery',
      description: 'Accelerate project timelines with streamlined workflows',
      percentage: '60%'
    },
    {
      title: 'Better Compliance',
      description: 'Ensure regulatory compliance with automated reporting',
      percentage: '95%'
    }
  ];

  const useCases = [
    {
      title: 'Metro Railway Projects',
      description: 'Complete project management for metro and railway infrastructure development',
      features: ['Track construction management', 'Station development oversight', 'Safety compliance monitoring']
    },
    {
      title: 'Civil Infrastructure',
      description: 'Comprehensive solutions for large-scale civil engineering projects',
      features: ['Bridge construction tracking', 'Road development management', 'Utility infrastructure planning']
    },
    {
      title: 'Smart City Development',
      description: 'Integrated platform for smart city planning and implementation',
      features: ['IoT infrastructure management', 'Traffic system optimization', 'Sustainable development tracking']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Flagship SaaS Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Tailored for large civil and infrastructure companies, especially in metro and railway sectors. 
                Transform your project management with AI-powered automation and intelligent workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Project Progress</span>
                      <span className="text-sm">87%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">42</div>
                        <div className="text-xs opacity-80">Active Tasks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-xs opacity-80">On Schedule</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">$2.1M</div>
                        <div className="text-xs opacity-80">Budget Used</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Platform Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive tools designed specifically for infrastructure and civil engineering projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Measurable Results</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real impact on your business operations and bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {benefit.percentage}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Industry Applications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Versatile solutions for various infrastructure and civil engineering sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, idx) => (
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

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Implementation Timeline</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get up and running quickly with our streamlined deployment process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Week 1-2', title: 'Setup & Configuration', icon: Settings },
              { phase: 'Week 3-4', title: 'Data Migration', icon: BarChart3 },
              { phase: 'Week 5-6', title: 'Team Training', icon: Users },
              { phase: 'Week 7+', title: 'Go Live & Support', icon: Zap }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{step.phase}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              See how our SaaS platform can revolutionize your infrastructure projects with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button 
                className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}