FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps
RUN npm install
COPY . .
RUN npm run build
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD [ "npm", "run" ,"start" ]
