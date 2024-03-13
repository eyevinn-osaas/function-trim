import api from './api';

const server = api({
  title: 'Media Function Trim',
  ffmpegPath: process.env.FFMPEG_PATH || '/usr/bin/ffmpeg'
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

server.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    throw err;
  }
  console.log(`Server listening on ${address}`);
});

export default server;
