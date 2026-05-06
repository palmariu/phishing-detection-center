// client/src/components/FeatureCard.jsx

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400/30 transition duration-300 shadow-lg">

      {/* Icon Box */}
      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;