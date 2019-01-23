FROM node:carbon
# Create app directory
#WORKDIR /Users/kevinzola/Documents/shopee-test
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"] ]