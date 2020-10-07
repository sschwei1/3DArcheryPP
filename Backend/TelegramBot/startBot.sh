#!/bin/bash
dotnet build --configuration Release
echo -en '\n'
echo -en '\n'
./bin/Release/netcoreapp3.1/TelegramBot
