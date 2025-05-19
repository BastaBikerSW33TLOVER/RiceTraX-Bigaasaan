import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', sales: 10000 },
    { name: 'Feb', sales: 15000 },
    { name: 'Mar', sales: 20000 },
    { name: 'Apr', sales: 12000 },
    { name: 'May', sales: 18000 },
];

const SalesChart = () => (
    <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#16a34a" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default SalesChart;