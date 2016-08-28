FROM scriptnull/debian:hasnodejs

ADD . /app

WORKDIR /app

RUN ["npm", "install"]

ENTRYPOINT ["npm", "start"]
