# Use an official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all the application source code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Use an official Node.js image as the base image for the production environment
FROM node:18-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy necessary files from the build stage to the production stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Command to start the Next.js application
CMD ["npm", "start"]
