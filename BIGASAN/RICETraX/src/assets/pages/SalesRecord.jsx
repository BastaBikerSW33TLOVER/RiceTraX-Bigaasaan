const sales = [
    { id: 'TXN001', date: '2025-05-01', product: 'Dinorado', qty: 3, amount: 2400 },
    { id: 'TXN002', date: '2025-05-02', product: 'Maharlika', qty: 2, amount: 1500 },
    { id: 'TXN003', date: '2025-05-03', product: 'Jasmin', qty: 5, amount: 3750 },
];

const SalesRecord = () => {
    return (
        <div className="ml-64 p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Sales Record</h1>
            <div className="bg-white p-4 rounded shadow">
                <table className="w-full text-left border border-gray-200">
                    <thead className="bg-green-800 text-white">
                        <tr>
                            <th className="px-4 py-2">Transaction ID</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Qty</th>
                            <th className="px-4 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((item, idx) => (
                            <tr key={idx} className="border-t border-gray-200">
                                <td className="px-4 py-2">{item.id}</td>
                                <td className="px-4 py-2">{item.date}</td>
                                <td className="px-4 py-2">{item.product}</td>
                                <td className="px-4 py-2">{item.qty}</td>
                                <td className="px-4 py-2">₱{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesRecord;