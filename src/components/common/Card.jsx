const Card = ({ children, className = '' }) => {
  return (
    <div className={`glass rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;