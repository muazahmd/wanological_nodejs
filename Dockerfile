# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port your app is listening on
EXPOSE 3000

# Command to run your application
CMD ["nodemon", "--exec", "ts-node", "./Src/bin/www.ts"]
