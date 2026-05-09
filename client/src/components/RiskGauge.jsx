const RiskGauge = ({ score }) => {
  let label = "";
  let textColor = "";

  if (score >= 90) {
    label = "Safe";
    textColor = "text-green-400";
  } else if (score >= 70) {
    label = "Moderate";
    textColor = "text-yellow-400";
  } else {
    label = "Malicious";
    textColor = "text-red-400";
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-semibold mb-6">
        Risk Score Analysis
      </h2>

      <div className={`text-6xl font-bold mb-4 ${textColor}`}>
        {score}
      </div>

      <p className={`text-2xl font-semibold ${textColor}`}>
        {label}
      </p>
    </div>
  );
};

export default RiskGauge;