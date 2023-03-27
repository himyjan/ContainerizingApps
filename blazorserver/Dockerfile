#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

# FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
# WORKDIR /app
# EXPOSE 80
# EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0.400 AS build
WORKDIR /src
COPY ["blazorserver/blazorserver.csproj", "blazorserver/"]
RUN dotnet restore "blazorserver/blazorserver.csproj"
COPY . ./
WORKDIR "/src/blazorserver/."
RUN dotnet build "blazorserver.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "blazorserver.csproj" -c Release -o /app/publish

FROM publish
RUN dotnet dev-certs https --clean
RUN dotnet dev-certs https --verbose
WORKDIR /var/www
COPY --from=publish /app/publish /var/www
EXPOSE 8092
ENTRYPOINT ["dotnet", "/var/www/blazorserver.dll"]

# FROM nginx:latest
# WORKDIR /var/www
# COPY --from=publish /app/publish /var/www
# COPY /blazorserver/nginx.conf /etc/nginx/nginx.conf
# EXPOSE 5000
# ENTRYPOINT ["nginx","-g","daemon off;"]



# # FROM publish
# WORKDIR /app
# # COPY --from=publish /app/publish .
# COPY /blazorserver/commands.sh /scripts/commands.sh
# RUN ["chmod", "+x", "/scripts/commands.sh"]
# ENTRYPOINT ["/scripts/commands.sh"]