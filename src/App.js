import Header from "./components/header";
import headerData from "./data/header";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header headerData={headerData}></Header>
      </header>
    </div>
  );
}

export default App;
