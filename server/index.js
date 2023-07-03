const liveServer = require('live-server');

const params = {
  port: 5000,
  host: 'localhost',
  root: './client',
  open: false,
};

liveServer.start(params);
