const stockData = [
    { name: 'Dinorado', stocks: '45 sacks' },
    { name: 'Maharlika', stocks: '70 sacks' },
    { name: 'Jasmin', stocks: '30 sacks' },
];

const StockTable = () => (
    <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Stock Availability</h2>
        <table className="w-full text-left border border-gray-200">
            <thead className="bg-green-800 text-white">
                <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Available Stocks</th>
                </tr>
            </thead>
            <tbody>
                {stockData.map((item, idx) => (
                    <tr key={idx} className="border-t border-gray-200">
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.stocks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default StockTable;