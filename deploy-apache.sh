#!/bin/bash
# Auto Copy script for the apache server

npm run build 
rm -rf /var/www/html/compteur-lettre
cp -r ./build /var/www/html/compteur-lettre