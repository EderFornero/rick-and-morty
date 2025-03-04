export const getApi = async () => {
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
