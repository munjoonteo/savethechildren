import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./style/App.css";

function App() {
  let disasters = [
    {
      name: "storm",
      date: "hi",
    },
    {
      name: "quake",
      date: "bye",
    },
  ];

  return (
    <div className="App">
      <div>
        <div className="filler"></div>
        <Sidebar disasters={disasters} />
      </div>
      <Header />
    </div>
  );
}

export default App;
