FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install; \
	npm install -g nodemon; \
	npm install -g mongoose

COPY . /app

EXPOSE 2376

CMD [ "nodemon", "-L", "/app/bin/www" ]
