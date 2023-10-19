#From baseimage
FROM node:20-alpine3.17

#work in container
WORKDIR /app

#file docker to container copy .. = copy in same folder docker to  app
COPY . .

#if run use || you don't have nmp you can use "RUN npm install" 

RUN npm --version


#EXPOSE port
EXPOSE 8000

CMD ["node", "server.js"]