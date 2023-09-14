const {exec} = require('node:child_process');
const option = process.argv.filter(item=>item.startsWith('--')).map(item=> item.substring(2))[0];

var fs = require('fs');
console.log('Incrementing build number...');
fs.readFile('public/metadata.json',(err,content) => {
    if (err) throw err;
    var metadata = JSON.parse(content);
    if(option=='revision')
        metadata.buildRevision++;
    else if(option=='minor'){
        metadata.buildRevision = 0;
        metadata.buildMinor ++;
    } else if(option=='major'){
        metadata.buildRevision = 0;
        metadata.buildMinor = 0;
        metadata.buildMajor ++;
    } else {
        console.log('che cazzo fai')
        return
    }
    fs.writeFile('public/metadata.json',JSON.stringify(metadata),(err)=>{
        if (err) throw err;
        exec('nuxt generate')
        console.log(`Current build number: ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision}`);
    })
});