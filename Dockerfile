FROM node

RUN mkdir /node

COPY *  /node/

WORKDIR /node/

#CMD ["pwd"]

#CMD {"cat","text"]

RUN ["npm","install"]

CMD ["npm","run","start"]
