import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Dinorado', value: 400 },
    { name: 'Maharlika', value: 300 },
    { name: 'Jasmin', value: 300 },
];

const COLORS = ['#16a34a', '#15803d', '#166534'];

const TopProductsChart = () => (
    <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Top Selling Products</h2>
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie data={data} dataKey="value" outerRadius={80} label>
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </div>
);

export default TopProductsChart;