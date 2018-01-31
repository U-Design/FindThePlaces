const { exec } = require('child_process');
let ls = exec('kubectl get pod --selector=weave-scope-component=app -o jsonpath={.items..metadata.name}')

ls.stdout.on('data', function (data) {
    ls = exec(`kubectl port-forward ${data} 4040`);
    console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});