const NumberService = require('../services/numberService');
const WindowManager = require('../utils/windowManager');

class NumberController {
  constructor() {
    this.windowManager = new WindowManager(process.env.WINDOW_SIZE);
    this.numberService = new NumberService(process.env.REQUEST_TIMEOUT);
  }

  async getNumbers(req, res) {
    const numberId = req.params.id;
    let apiUrl;

   
    switch (numberId) {
      case 'p':
        apiUrl = process.env.PRIME_API;
        break;
      case 'f':
        apiUrl = process.env.FIBO_API;
        break;
      case 'e':
        apiUrl = process.env.EVEN_API;
        break;
      case 'r':
        apiUrl = process.env.RAND_API;
        break;
      default:
        return res.status(400).json({ error: 'Invalid number ID. Use p, f, e, or r.' });
    }

    try {
     
      const windowPrevState = [...this.windowManager.getNumbers()];

    
      const newNumbers = await this.numberService.fetchNumbers(apiUrl);
      if (newNumbers.length === 0) {
        return res.status(503).json({ error: 'Failed to fetch numbers from third-party API' });
      }

      
      this.windowManager.addNumbers(newNumbers);

      const windowCurrState = this.windowManager.getNumbers();
      const avg = this.windowManager.getAverage();

     
      return res.status(200).json({
        windowPrevState,
        windowCurrState,
        numbers: newNumbers,
        avg
      });
    } catch (error) {
      console.error('Error in getNumbers:', error.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new NumberController();