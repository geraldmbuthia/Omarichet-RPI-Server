// Failed to work with promises, need to be figured out
//and fixed.
const {exec} = require("child_process");
const execute = function(i){
    exec(i, (error, stdout, stderr) => {
        let out = stdout;
        if(error){
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr){
            console.log(`stderr: ${stderr.message}`)
        }
        console.log(`Output ${out}`);
        return out;
     })
}

module.exports = {execute};