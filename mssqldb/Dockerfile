# FROM microsoft/mssql-server-linux:latest

# RUN apt-get update && apt-get install -y  \
# 	curl \
# 	apt-transport-https

# # https://docs.microsoft.com/en-us/sql/connect/odbc/linux/installing-the-microsoft-odbc-driver-for-sql-server-on-linux
# RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
# RUN curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list > /etc/apt/sources.list.d/mssql-release.list

# RUN apt-get install -y locales \
#     && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
#     && locale-gen

# ENV PATH="/opt/mssql-tools/bin:${PATH}"

# RUN mkdir -p /var/opt/mssql/backup
# WORKDIR /var/opt/mssql/backup
# RUN curl -L -o AdventureWorksDW2017.bak https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorksDW2017.bak



# FROM mcr.microsoft.com/mssql/server:2019-latest
#For ARM architecture M1
FROM mcr.microsoft.com/azure-sql-edge:latest

USER root

WORKDIR /src

COPY /setup.sql setup.sql
COPY import-data.sh import-data.sh
COPY entrypoint.sh entrypoint.sh

RUN chmod +x ./entrypoint.sh
RUN chmod +x ./import-data.sh

CMD /bin/bash ./entrypoint.sh