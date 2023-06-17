import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 8odny8iffDskiSmjYYLd4MLryPIBmqeN8jaRvJL3UaIeyJmv5S9d7HghBbhEfrtxOo7fCaYeT1WrSHcr3BCJktKmgVb-yNu4BKtKEHSIFKOGhcpxTFpspmtfZBKOZHYx",
  },
});
