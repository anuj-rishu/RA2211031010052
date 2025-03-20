const axios = require('axios');

class NumberService {
  constructor(timeout) {
    this.timeout = timeout;
  }

  async fetchNumbers(apiUrl) {
    try {
      const response = await axios.get(apiUrl, { timeout: this.timeout });
      if (response.status === 200 && response.data.numbers) {
        return response.data.numbers;
      }
      return [];
    } catch (error) {
      console.error(`Error fetching numbers from ${apiUrl}:`, error.message);
      return [];
    }
  }
}

module.exports = NumberService;