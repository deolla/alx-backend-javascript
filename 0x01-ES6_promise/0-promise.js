function MyAPI() {
  // Constructor logic if needed
}

MyAPI.prototype.getResponseFromAPI = function () {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call with a setTimeout
    setTimeout(() => {
      const responseData = { data: "API response data" };
      resolve(responseData);
    }, 1000); // Simulating a delay of 1 second
  });
};

export default MyAPI;
