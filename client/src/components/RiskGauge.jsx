const RiskGauge = ({ score }) => {
  let status = "Safe";
  let color = "text-green-400";
  let border = "border-green-400/30";
  let bg = "bg-green-400/10";

  if (score >= 40 && score < 70) {
    status = "Suspicious";
    color = "text-yellow-400";
    border = "border-yellow-400/30";
    bg = "bg-yellow-400/10";
  }

  if (score >= 70) {
    status = "Malicious";
    color = "text-red-400";
    border = "border-red-400/30";
    bg = "bg-red-400/10";
  }

  return (
    <div className={`rounded-2xl border ${border} ${bg} p-8 text-center`}>
      <h2 className="text-lg text-slate-300 mb-4">
        Risk Score Analysis
      </h2>

      <div className={`text-6xl font-bold ${color}`}>
        {score}
      </div>

      <p className={`mt-4 text-xl font-semibold ${color}`}>
        {status}
      </p>
    </div>
  );
};

export default RiskGauge;