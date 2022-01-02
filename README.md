# Container Web Apps

[ogmueller/docker-for-students: Docker setup for students to use PHP, NGINX, MariaDB, and more. Kind of an XAMPP replacement. (github.com)](https://github.com/ogmueller/docker-for-students)

XAMPP - Docker setup for students to use PHP, NGINX, MariaDB, and WebMail(MailHog)

```
docker-compose up -d --build web phpmyadmin mail
```

http://localhost:8080/ (php)

http://localhost:8081/ (phpMyAdmin)

http://localhost:8025/ (Webmail)



[adhavpavan/ContainerizingApps (github.com)](https://github.com/adhavpavan/ContainerizingApps)

Node.js

```
docker-compose up -d --build node
```

http://localhost:8090



Angular

```
docker-compose up -d --build angular
```

http://localhost:8082



React

```
docker-compose up -d --build react
```

http://localhost:8083



Vue

```
docker-compose up -d --build vue
```

[http://localhost:8084]()



Flutter Web

```
docker-compose up -d --build flutterweb
```

http://localhost:8085



blazor (dotnet6) - not work on docker

```
docker-compose up -d --build blazor
```

http://localhost:8086