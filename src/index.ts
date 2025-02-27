import * as dotenv from 'dotenv';
import { RateLimitingMiddleware } from './rate-limiting.middleware';
const express = require("express");
const app = express();

const result = dotenv.config({ path: '.env' });
if (result.error) console.error('** .env undefined **');

export class App {

  static start(): void {
    app.use(RateLimitingMiddleware.apply);

    app.get("/api/data", (req, res) => {
      res.json({ message: "Success" });
    });
    
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  }

}

App.start();



