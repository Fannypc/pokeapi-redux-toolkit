import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveTutorials } from "./slices/tutorials";

function App() {
  const dispatch = useDispatch();
  const { tutorials } = useSelector((state) => state);

  useEffect(() => {
    try {
      dispatch(retrieveTutorials());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {tutorials.map((pokemon) => {
          return pokemon.name;
        })}
      </header>
    </div>
  );
}

export default App;
