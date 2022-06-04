FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MrTima01/BOT-Z /root/Z-BOT
WORKDIR /root/ales/
RUN git clone https://github.com/Kavindya-X/Config
RUN git clone https://github.com/Kavindya-X/Angela-x
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
