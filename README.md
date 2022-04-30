# Container Web Apps

[ogmueller/docker-for-students: Docker setup for students to use PHP, NGINX, MariaDB, and more. Kind of an XAMPP replacement. (github.com)](https://github.com/ogmueller/docker-for-students)

XAMPP - Docker setup for students to use PHP, NGINX, MariaDB, and WebMail(MailHog)

```
docker-compose up -d --build web phpmyadmin mail
```

<http://localhost:8080/> (php)

<http://localhost:8081/> (phpMyAdmin)

<http://localhost:8025/> (Webmail)

[adhavpavan/ContainerizingApps (github.com)](https://github.com/adhavpavan/ContainerizingApps)

Node.js

```
docker-compose up -d --build node
```

<http://localhost:8090>

Angular

```
docker-compose up -d --build angular
```

<http://localhost:8082>

React

```
docker-compose up -d --build react
```

<http://localhost:8083>

Vue

```
docker-compose up -d --build vue
```

[http://localhost:8084]()

[Container size too large · Issue #1 · jared-nelsen/flutter_web_docker_example · GitHub](https://github.com/jared-nelsen/flutter_web_docker_example/issues/1#issuecomment-986097288)

Flutter Web

```
docker-compose up -d --build flutterweb
```

<http://localhost:8085>

Blazor Server (dotnet v6)

```
docker-compose up -d --build blazorserver
```

<http://localhost:8086> try 5001 and then try 8086

Blazor WebAssembly (dotnet v6)

```
docker-compose up -d --build blazorwasm
```

<http://localhost:8087>

[testdrivenio/django-on-docker: Dockerizing Django with Postgres, Gunicorn, and Nginx (github.com)](https://github.com/testdrivenio/django-on-docker)

Django v4

```
docker-compose up -d --build djangoweb
```

<http://localhost:8088>

or add nginx file service

```
docker-compose up -d --build nginx
```

FastAPI

```
docker-compose up -d --build fastapi
```

<http://localhost:8089>

vue create vue-app
ng new angular-app
npx create-react-app react-app
