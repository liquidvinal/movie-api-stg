FROM node:10-alpine

WORKDIR /app

RUN npm install nodemon -g

COPY  ./package.json ./

RUN npm install 


COPY . .

EXPOSE 3000

CMD ["npm", "start"]