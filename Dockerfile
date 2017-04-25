FROM node:7.9

# Create app directory
# WORKDIR

#Install app dependencies
ADD package.json
RUN npm install

#RUN npm install -g gulp-cli
#RUN npm install -g gulp

#Define Environment variable
ENV NAME dev

#Copy Code from the Application into the Container
COPY /public /public

#Make port available
EXPOSE 80

#Bundle source code and run application

CMD ["npm start"]

LABEL maintainer="evan.bonertz@commercetools.com"
