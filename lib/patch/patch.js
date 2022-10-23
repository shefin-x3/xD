const exec = require('child_process').exec;

async function patch() {
    var sdn = 'RUN git clone https://github.com/5hefin/Alexa-MD /root/Alexa' + '\n'
    exec('sed -n 3p /root/Alexa/lib/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
    throw new Error("Fake Alexa!");
    }
  })
}

module.export = patch;
