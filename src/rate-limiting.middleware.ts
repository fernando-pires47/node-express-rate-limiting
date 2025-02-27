import { RedisCache } from './redis';

export class RateLimitingMiddleware {
  static async apply(req, res, next) {
    const ip = req.ip || req.connection.remoteAddress;
    const key = `rate-limit:${ip}`;
    const limit = Number(process.env.LIMIT_REQUESTS); 
    const window = Number(process.env.BLOCK_WINDOW); 
  
    try {
      const current = await RedisCache.getClient().incr(key);
  
      // Set expiration time
      if (current === 1) {
        await RedisCache.getClient().expire(key, window);
      }
  
      if (current > limit) {
        return res.status(429).json({ message: "Too many requests. Try again later." });
      }
  
      next();
    } catch (error) {
      console.error("Rate limit error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}
