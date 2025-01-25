import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonChart = () => {
  const data = {
    labels: [0, 10, 25, 40, 50, 60, 75, 90, 100],
    datasets: [
      {
        label: 'your percentile',
        data: [10, 15, 30, 40, 90, 80, 40, 20, 10],
        fill: false,
        backgroundColor: '#6366f1',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonChart;