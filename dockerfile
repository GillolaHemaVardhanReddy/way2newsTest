# Stage 1: Build React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build folder from the first stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to access the app in the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
