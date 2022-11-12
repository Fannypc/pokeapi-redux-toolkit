import axios from "axios";

export default axios.create({
  baseURL: "https://pokemons-data.herokuapp.com/api/v1",
});
