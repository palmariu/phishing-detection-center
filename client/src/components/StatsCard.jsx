// client/src/components/StatsCard.jsx

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/30 transition duration-300 shadow-lg">
      <h3 className="text-slate-400 text-sm mb-2">
        {title}
      </h3>

      <p className="text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;