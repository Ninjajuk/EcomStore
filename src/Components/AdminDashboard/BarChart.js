import React from "react";

const BarChart = ({ data, xAxisLabels, yAxisInterval }) => {
  const maxYValue = Math.max(...data);
  const yAxisValues = Array.from(
    { length: Math.ceil(maxYValue / yAxisInterval) },
    (_, index) => (index + 1) * yAxisInterval
  );

  return (
    <div className="flex flex-col items-center w-full h-full py-2">
      <svg className="w-3/4 h-3/4" viewBox={`0 0 ${data.length * 50} 320`}>
        {/* Bars */}
        {data.map((value, index) => (
          <g key={index}>
            <rect
              x={index * 50}
              y={300 - value * 10}
              width="40"
              height={value * 10}
              className="fill-current text-blue-500"
            />
            <text
              x={index * 50 + 20}
              y={310}
              textAnchor="middle"
              className="text-red-600 "
            >
              <tspan x={index * 50 + 20} dy="0.5em">
                {xAxisLabels[index]}
              </tspan>
            </text>
          </g>
        ))}
        {/* Y-axis labels */}
        {yAxisValues.map((value, index) => (
          <text
            key={index}
            x={-30}
            y={320 - value * 10}
            textAnchor="end"
            alignmentBaseline="middle"
            className="text-gray-600"
          >
            {value}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default BarChart;
