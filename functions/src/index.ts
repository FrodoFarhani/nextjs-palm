const functions = require("firebase-functions");
const admin = require("firebase-admin");
const myFetch = require("node-fetch");
const cors = require("cors")();

admin.initializeApp();

// Define CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from your local development server
  methods: "GET", // Add other HTTP methods if needed
};

// Securely call the external API with CORS enabled
exports.callPalmApi = functions.https.onRequest((_req:any, res:any) => {
  // Enable CORS for the function
  cors(_req, res, () => {
    try {
      // Perform any necessary Firebase authentication or authorization checks here

      // Replace this URL with your actual external API URL
      const apiUrl = "https://australia-southeast1-testpalmapi-4ea35.cloudfunctions.net/ext-palm-secure-backend-post";

      // Make a secure request to the external API
      myFetch(apiUrl)
        .then((response:any) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data from the external API");
          }
          return response.json();
        })
        .then((data:any) => {
          return res.status(200).json(data);
        })
        .catch((error:any) => {
          console.error(error);
          return res.status(500).json({ error: "Internal server error" });
        });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});
