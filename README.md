# Node express rate limiting
This node application is a super simple rate limiting example using Express.

### Dependencies
* Docker
* Docker Compose
* NPM
* Node(locally)

### Project dependencies
* express
* ioredis
* dotenv

### Project DEV dependencies
* nodemon
* ts-node


## Variables configurable to test with default values

 ```bash
  PORT=3000

  REDIS_HOST=redis
  REDIS_PORT=6379

  BLOCK_WINDOW=60
  LIMIT_REQUESTS=5
```

## Run project

First of all, install dependencies:

```bash
  npm install
```

To run locally:

```bash
  npm run start:dev
```

To run via docker in dev environment:

```bash
  npm run start:docker
```

## Hands on

#### Perform requests on the backend  

```bash
  http://localhost:3000/
```

After overtaking the value defined in the `LIMIT_REQUESTS` configuration, you're going to receive **Too Many Requests(429)** response.

After the window defined in the `BLOCK_WINDOW` configuration, you're going to receive **Success(200)** response.

## License

This application is available under the
[MIT license](https://opensource.org/licenses/MIT).







  
