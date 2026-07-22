const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg';
  const styles = {
    primary: 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:shadow-indigo-500/40',
    outline: 'border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10',
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;