import axios from "../axios";

class TutorialDataService {
  get() {
    return axios.get("/pokemons");
  }
}

export default new TutorialDataService();
