FROM node:19-alpine AS development
ENV NODE_ENV development

#add working directory inside container
WORKDIR /docker-chatapp-frontend

#cache and install dependencies
COPY package*.json .
#https://docs.npmjs.com/cli/v7/commands/npm-ci
RUN npm ci

# copy app files to container
COPY . /docker-chatapp-frontend

ENV CI=true
ENV PORT=3000

#start the app
CMD ["npm", "start"]