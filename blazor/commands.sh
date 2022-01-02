#!/bin/bash
dotnet dev-certs https --clean
dotnet dev-certs https --verbose
dotnet blazor.dll