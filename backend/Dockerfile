# Stage 1 Development
FROM node as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force && npm cache verify

RUN npm i -f

ADD . /usr/src/app

RUN npm run build

# Stage 2 Production
FROM node as production

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/prisma ./prisma

COPY --from=development /usr/src/app/src/scripts ./src/scripts

COPY --from=development /usr/src/app/package*.json ./

COPY --from=development /usr/src/app/build ./build

COPY --from=development /usr/src/app/src/scripts ./src/scripts

RUN npm cache clean --force && npm cache verify

RUN npm install -f --omit=dev