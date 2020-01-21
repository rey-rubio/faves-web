FROM node:8

WORKDIR /faves/frontend

# Install dependencies
COPY package*.json ./
RUN npm ci -qy
# COPY package.json /faves/package.json
# COPY package-lock.json /faves/package-lock.json
# RUN ls -al
# RUN npm install
# RUN npm install react-scripts@3.0.1 -g

# Add rest of the client code
COPY . /faves/frontend/

EXPOSE 3000

CMD ["npm", "start"]