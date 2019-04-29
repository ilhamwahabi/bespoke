import api from "../api";

export const changePokemon = (pokemonName: string) => async (
  dispatch: Function
) => {
  dispatch({ type: "START_LOADING" });
  const response = await api.get(`/${pokemonName}`);

  dispatch({ type: "CHANGE_POKEMON", payload: response.data });
  dispatch({ type: "FINISH_LOADING" });
};