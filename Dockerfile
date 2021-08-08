FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add g++ make python
RUN npm install
COPY . .
RUN npm run build
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD [ "npm", "run" ,"start" ]
