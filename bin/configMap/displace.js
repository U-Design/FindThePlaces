var bat = require.resolve('./displace.bat');
const { spawn } = require('child_process');
var ls = spawn(bat);
ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});