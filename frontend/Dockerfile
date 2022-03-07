FROM node:alpine
ENV PORT 3000

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
