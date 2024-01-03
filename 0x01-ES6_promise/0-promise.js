function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiResponse = "Sample API response";
      const isAPISuccessful = true;

      if (isAPISuccessful) {
        resolve(apiResponse);
      } else {
        reject(new Error("API call failed"));
      }
    }, 1000);
  });
}

export default getResponseFromAPI;
