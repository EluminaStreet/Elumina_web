import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    name: 'Heritage Collection',
    description: 'Indian-styled street light poles for heritage locations',
    image: '/assets/product1.jpeg'
  },
  {
    name: 'Modern Series',
    description: 'Sleek futuristic street light poles for high-tech societies',
    image: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&q=80'
  }
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Products & Customization
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <div className="relative w-full h-[29rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-200">{product.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
