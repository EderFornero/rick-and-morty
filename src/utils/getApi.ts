const getApi = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api");
    if (!response.ok) throw new Error("Error fetching API.");

    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getChars = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) throw new Error("Error fetching characters url.");

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLocations = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/location");

    if (!response.ok) throw new Error("Error fetching locations url.");

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEpisodes = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/episode");

    if (!response.ok) throw new Error("Error fetching episodes url.");

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getApi, getChars, getLocations, getEpisodes };
