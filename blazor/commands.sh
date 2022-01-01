#!/bin/bash
dotnet dev-certs https --clean
dotnet dev-certs https -t
dotnet blazor.dll