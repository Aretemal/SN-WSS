FROM node

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

EXPOSE 1000

CMD [ "npm", "run", "serve"]
