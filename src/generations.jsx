import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

function Generations() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2"></h2>
      <div className="flex gap-4">
        <Gen1 />
        <Gen2 />
        <Gen3 />
        <Gen4 />
      </div>
    </div>
  );
}

export default Generations;