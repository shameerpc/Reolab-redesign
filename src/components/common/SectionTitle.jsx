const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gradient">{title}</h2>
      {description && <p className="mt-4 text-slate-400 text-lg">{description}</p>}
    </div>
  );
};

export default SectionTitle;