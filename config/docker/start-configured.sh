#!/bin/bash
{ rm /usr/share/nginx/html/main.js && envsubst "$(cat /usr/share/frontend-config.json.dist)" > /usr/share/nginx/html/main.js; } < /usr/share/nginx/html/main.js

exec nginx -g "daemon off;"
