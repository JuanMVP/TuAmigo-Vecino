FROM node:8



#ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 9000

CMD [ "npm", "run", "dev" ]



