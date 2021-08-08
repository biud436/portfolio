FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --quiet node-gyp -g
RUN npm install
COPY . .
RUN npm run build
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD [ "npm", "run" ,"start" ]
