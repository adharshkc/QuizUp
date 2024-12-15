
interface GaugeProps {
    percentage: number;
}

const Gauge: React.FC<GaugeProps> = ({ percentage }) => {
    const constrainedPercentage = Math.min(100, Math.max(0, percentage));
    const needleRotation = (constrainedPercentage / 100) * 180 - 90;

    return (
        <div className="relative flex items-center justify-center w-64 h-52">
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-t-full"></div>
            <div className="absolute w-[90%] h-[90%] bg-white rounded-t-full shadow-md bottom-0"></div>
            <div
                className="absolute w-2 h-28 bg-black origin-bottom"
                style={{ transform: `rotate(${needleRotation}deg)` }}
            ></div>
            <div className="relative flex items-center justify-center w-24 h-24 mt-10 bg-white rounded-full shadow-md">
                <span className="text-2xl font-bold text-gray-800">
                    {constrainedPercentage}%
                </span>
            </div>
        </div>
    );
};

export default Gauge;
