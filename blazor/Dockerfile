#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

# FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
# WORKDIR /app
# EXPOSE 80
# EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["blazor/blazor.csproj", "blazor/"]
RUN dotnet restore "blazor/blazor.csproj"
COPY . .
WORKDIR "/src/blazor/."
RUN dotnet build "blazor.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "blazor.csproj" -c Release -o /app/publish

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=publish /app/publish /var/www
COPY /blazor/nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
ENTRYPOINT ["nginx","-g","daemon off;"]

# FROM publish
# WORKDIR /app
# COPY --from=publish /app/publish .
# COPY /blazor/commands.sh /scripts/commands.sh
# RUN ["chmod", "+x", "/scripts/commands.sh"]
# ENTRYPOINT ["/scripts/commands.sh"]