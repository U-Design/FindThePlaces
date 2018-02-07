FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./src /app/src
COPY ./configuration /app/configuration
CMD [ "npm","start" ]
EXPOSE 8080