FROM node:7.9

# Create app directory
WORKDIR /src

#Install app dependencies
RUN npm install -g gulp-cli
RUN npm install -g gulp
ADD package.json
RUN npm install

#Define Environment variable
ENV NAME dev

#Copy Code from the Application into the Container
COPY app.js /src

#Make port available
EXPOSE 80

#Bundle source code and run application

CMD ["gulp"]

LABEL maintainer="evan.bonertz@commercetools.com"
