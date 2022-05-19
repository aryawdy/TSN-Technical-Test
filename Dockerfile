FROM node:16.14

WORKDIR /usr/local/app

COPY package.json package-lock.json  /usr/local/app/

RUN npm install && npm cache clean --force

COPY ./ ./

CMD ["node", "app.js"]