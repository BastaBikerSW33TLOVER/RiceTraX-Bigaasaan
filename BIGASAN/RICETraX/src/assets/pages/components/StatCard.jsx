const StatCard = ({ title, value }) => {
    return (
        <div className="bg-white p-4 rounded shadow w-full">
            <div className="text-gray-600 text-sm">{title}</div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    );
};

export default StatCard;