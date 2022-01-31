FROM ubuntu:18.04
ENV PORT 3000

# Install Node.js
RUN apt-get install -y build-essential

# Create app directory
RUN mkdir -p /app/frontend
WORKDIR /app/frontend

# Installing dependencies
Copy package*.json /app/frontend/
RUN npm install

# Copying sourcesfiles
COPY . /app/frontend/

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
# En prod, changer to CMD "npm" "start"
CMD "npm" "run" "dev"
