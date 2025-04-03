import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Sun, Paintbrush } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'AI-powered Detection',
    description: 'Advanced weapon, crime & accident detection capabilities'
  },
  {
    icon: Paintbrush,
    title: 'Customizable Designs',
    description: "From Jaipur's heritage-inspired to modern futuristic styles"
  },
  {
    icon: Sun,
    title: 'Sustainable Power',
    description: 'Solar-powered technology reducing energy costs and emissions'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Elumina Street Solutions</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Elumina Street Solutions is transforming urban landscapes with AI-powered surveillance and smart street lighting. 
            Our flagship AI CCTV-integrated street lights detect weapons, crime, and accidents—enhancing safety and security. 
            Additionally, we prioritize sustainability by integrating solar panels to reduce carbon footprints while improving urban infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card hover:bg-primary hover:text-white group"
            >
              <feature.icon className="w-12 h-12 mb-4 mx-auto text-primary group-hover:text-white" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}