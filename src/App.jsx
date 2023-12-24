import MainComp from "./assets/components/MainComp/MainComp";
import Dashboard from "./assets/components/Dashboard/Dashboard";
function App() {
  return (
    <div className="flex">
      <Dashboard />
      <MainComp />
      <Trend />
    </div>
  );
}

export default App;
