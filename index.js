const http = require('http');
const os = require('os');

http.createServer(function (req, res) {
  console.log(`Just got a request at ${req.url}!`);

  const osInfo = {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime()
  };

  const cpuInfo = {
    model: os.cpus()[0].model,
    speed: os.cpus()[0].speed,
    cores: os.cpus().length
  };

  const systemInfo = {
    os: osInfo,
    cpu: cpuInfo
  };

  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(systemInfo));
  res.end();
}).listen(process.env.PORT || 3000);
