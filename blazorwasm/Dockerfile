#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

# FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
# WORKDIR /app
# EXPOSE 80
# EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0.500 AS build
WORKDIR /src
COPY ["blazorwasm/blazorwasm.csproj", "blazorwasm/"]
RUN dotnet restore "blazorwasm/blazorwasm.csproj"
COPY . ./
WORKDIR "/src/blazorwasm/."
RUN dotnet build "blazorwasm.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "blazorwasm.csproj" -c Release -o /app/publish

# FROM publish
# RUN dotnet dev-certs https --clean
# RUN dotnet dev-certs https --verbose
# WORKDIR /var/www
# COPY --from=publish /app/publish /var/www
# EXPOSE 8087
# ENTRYPOINT ["dotnet", "/var/www/blazorwasm.dll"]

FROM nginx:latest
WORKDIR /var/www
COPY --from=publish /app/publish/wwwroot .
COPY /blazorwasm/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8093
# ENTRYPOINT ["nginx","-g","daemon off;"]

# # FROM publish
# WORKDIR /app
# # COPY --from=publish /app/publish .
# COPY /blazorwasm/commands.sh /scripts/commands.sh
# RUN ["chmod", "+x", "/scripts/commands.sh"]
# ENTRYPOINT ["/scripts/commands.sh"]