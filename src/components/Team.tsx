import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Harshada Chandel',
    title: 'CEO',
    bio: 'Visionary business leader and developer, driving meaningful impact',
    image: "/assets/CEO.jpg",
    link: 'https://www.linkedin.com/in/harshadachandel/'
  },
  {
    name: 'Vidhi Omar',
    title: 'CTO',
    bio: 'AI expert specializing in computer vision and smart infrastructure',
    image: '/assets/CTO.jpg',
    link: 'https://in.linkedin.com/in/vidhi-omar-391548300'
  },
  {
    name: 'Adithya Vedantam',
    title: 'COO',
    bio: 'Operations specialist with a focus on sustainable manufacturing',
    image: '/assets/COO.jpg',
    link: 'https://www.linkedin.com/in/adithyavedantam/'
  }
];

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Team</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <a
              key={index}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card group"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                    <Linkedin className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
