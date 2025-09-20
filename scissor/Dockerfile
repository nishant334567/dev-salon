# Use Node.js base image
FROM node:20-alpine

# Create working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build the app (for React/Next.js)
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
