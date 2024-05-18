import { FaUsers, FaLaptopCode, FaServer } from "react-icons/fa";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline">Welcome to SoftDev Inc.!</h1>
      <div className="flex space-x-4 mt-8">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
            <FaUsers size={32} />
          </div>
          <p className="text-xl font-bold mt-2">Team</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full">
            <FaLaptopCode size={32} />
          </div>
          <p className="text-xl font-bold mt-2">Products</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full">
            <FaServer size={32} />
          </div>
          <p className="text-xl font-bold mt-2">Infrastructure</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
