# FROM node:alpine
FROM node:alpine
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY . /usr/src/nuxt-app
RUN npm install

RUN npm run build
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./static/markdown /usr/src/nuxt-app/markdown
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run" ,"start" ]
