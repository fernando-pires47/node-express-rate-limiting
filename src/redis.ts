import Redis from 'ioredis';

export class RedisCache {

  static client: Redis;

  static getClient() {
    if(this.client) return this.client;
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      enableOfflineQueue: true,
    });
    return this.client;
  }
  
}
