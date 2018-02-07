var displace = require.resolve('./monitorDisplace.bat');
var deploy = require.resolve('./monitorDeploy.bat');

const { spawn } = require('child_process');
let ls = {};
if (process.argv[2] === 'deploy') {
    ls = spawn(deploy);
} else if (process.argv[2] === 'displace') {
    ls = spawn(displace);
}

ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});