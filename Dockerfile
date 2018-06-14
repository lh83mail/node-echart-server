FROM ubuntu:16.04
MAINTAINER lh83mail

ADD ./source.list /etc/apt/sources.list

RUN \
  apt-get install locales && \
  locale-gen zh_CN.UTF-8 && \
  DEBIAN_FRONTEND=noninteractive dpkg-reconfigure locales && \
  locale-gen zh_CN.UTF-8

ENV LANG=zh_CN.UTF-8
ENV LANGUAGE=zh_CN:zh
ENV LC_ALL=zh_CN.UTF-8

RUN \
  apt-get install -y libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++ 

RUN \
  apt-get install -y bash python2.7 nodejs python-dev python-pip python-virtualenv npm curl && \
  ln -s /usr/bin/nodejs /usr/bin/node

ADD . /server/ 
RUN cd /server && npm install --registry=https://registry.npm.taobao.org/

EXPOSE 80

CMD ["/usr/bin/node /server/inex.js"]
