import logo from "./logo.svg";
import "./App.css";
import { useGetPokemonsQuery } from "./slices/tutorials";

function App() {
  const {
    data: pokemons,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetPokemonsQuery({ refetchOnMountOrArgChange: true });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {isGetSuccess &&
          pokemons.map((pokemon) => {
            return <p>{pokemon.name}</p>;
          })}
      </header>
    </div>
  );
}

export default App;
