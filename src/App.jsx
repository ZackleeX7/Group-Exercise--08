import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

const App = () => {
  return (
  <>
    <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
      
    </div>
    <Gen1/>
    <Gen2/>
    <Gen3/>
    <Gen4/>
  </>
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
