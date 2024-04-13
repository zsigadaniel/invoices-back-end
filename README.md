## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

```bash
$ docker compose up -d (start the container in the background)
```

I have set the port to  ```9876``` feel free to adjust in the yml file to what suites your needs

Seeding the database:


```bash
$ npx prisma db seed
```

This will create a user and a couple of invoices

```
username: JohnDoe
password: password
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
