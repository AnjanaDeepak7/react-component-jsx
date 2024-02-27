import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Anjana Deepak";
  const greetings = () => {
    return "Good Morning";
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}!</h1>
        <h2>{greetings()}</h2>
        <p>displaying statements as html statements</p>
        {/* displaying statements as html statements */}
        <p>[1,2,3]</p>
        <p>js expression</p>
        {/* js expression */}
        <p>{[1, 2, 3]}</p>
      </header>
    </div>
  );
}

export default App;
