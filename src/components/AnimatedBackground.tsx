const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      {/* Large floating orb - top right */}
      <div
        className="gradient-orb animate-float-slow"
        style={{
          width: '500px',
          height: '500px',
          top: '-10%',
          right: '-5%',
          opacity: 0.4,
        }}
      />
      
      {/* Medium floating orb - bottom left */}
      <div
        className="gradient-orb animate-float-medium"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-10%',
          left: '-5%',
          opacity: 0.5,
        }}
      />
      
      {/* Small floating orb - center */}
      <div
        className="gradient-orb animate-float-fast"
        style={{
          width: '300px',
          height: '300px',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.3,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
