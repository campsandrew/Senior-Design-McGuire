FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install; \
	npm install -g pug; \
	npm install -g mongodb; \
	npm install -g mongoose; \
	npm install -g monk; \
	npm install -g nodemon

COPY . /app

EXPOSE 2376

CMD [ "nodemon", "-L", "/app/bin/www" ]
