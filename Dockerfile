FROM  node:alpine3.14

WORKDIR /opt/web-app/app
COPY app.js *.json ./
RUN npm i
EXPOSE 8080
CMD ["node","app.js"]
