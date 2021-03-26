FROM node:10

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install --production

RUN npm install pm2 -g

RUN npm run build

COPY ../dist .

EXPOSE 4000

CMD ["pm2-runtime","app.js"]

