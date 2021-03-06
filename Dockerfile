
FROM python:3.8

# Init
ENV APP /var/www/Nextjs
WORKDIR $APP
COPY . .
RUN apt update -q;apt upgrade -yq

# Javascript
WORKDIR $APP
RUN apt install npm -yq
RUN npm install -g npm
RUN npm install --prefix public/static jquery@3.5.1 popper.js@1.16.1 bootstrap @fortawesome/fontawesome-free lazysizes
RUN npm install --save jquery@3.5.1 popper.js@1.16.1 bootstrap react react-dom next react-bootstrap firebase && \
    npm install --save @fortawesome/fontawesome-free lazysizes
# Typescript
RUN npm install --save-dev @types/jquery @types/popper.js @types/bootstrap @types/react-bootstrap && \
    npm install --save-dev typescript @types/react @types/react-dom @types/node @types/firebase && \
    npm install --save-dev node-sass @zeit/next-css @zeit/next-sass

# Hosting
WORKDIR $APP
CMD bash -c "npm run dev"
