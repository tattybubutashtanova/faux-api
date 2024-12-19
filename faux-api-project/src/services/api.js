const API_URL = "https://faux-api.com/?utm_source=chatgpt.com";

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Data:", data); 
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
