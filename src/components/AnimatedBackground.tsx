import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      {/* Large floating orb - top right */}
      <motion.div
        className="gradient-orb"
        style={{
          width: '600px',
          height: '600px',
          top: '-10%',
          right: '-5%',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.3, 0.9, 1],
          opacity: [0.4, 0.7, 0.5, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Medium floating orb - bottom left */}
      <motion.div
        className="gradient-orb"
        style={{
          width: '500px',
          height: '500px',
          bottom: '-10%',
          left: '-5%',
        }}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.8, 1.2, 1],
          opacity: [0.5, 0.8, 0.4, 0.5],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Small floating orb - center */}
      <motion.div
        className="gradient-orb"
        style={{
          width: '400px',
          height: '400px',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.1, 0.85, 1],
          opacity: [0.3, 0.6, 0.4, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Additional orb - top left */}
      <motion.div
        className="gradient-orb"
        style={{
          width: '350px',
          height: '350px',
          top: '15%',
          left: '20%',
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.35, 0.65, 0.45, 0.35],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      />

      {/* Additional orb - bottom right */}
      <motion.div
        className="gradient-orb"
        style={{
          width: '450px',
          height: '450px',
          bottom: '20%',
          right: '15%',
        }}
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -70, 50, 0],
          scale: [1, 0.9, 1.2, 1],
          opacity: [0.4, 0.7, 0.5, 0.4],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
