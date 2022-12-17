const express = require("express");
const { exec } = require("child_process");
const router = express.Router();
let obj = {};
let prevTemp;
let prevHum;
let prevCtemp;
let prevCfreq;
//The above are required to fix a bug where the python scripts return an undefined 
//variable. The fix should be to store defined values in variables and in case the output of
//of the scripts is undefined, then place the defined previous values instead.
//Another fix is rewrite the command execution scripts to be async.

router.get("/", async (req, res) => {
  let epv = `python ${process.cwd()}/PythonScripts/voltage.py`
  let epm = `python ${process.cwd()}/PythonScripts/mpu.py`
  let epct = `python ${process.cwd()}/PythonScripts/cputemp.py`
  let epcf = `python ${process.cwd()}/PythonScripts/cpufreq.py`
  let epth = `python ${process.cwd()}/PythonScripts/tempHum.py`
  
  exec(epv, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.voltage = stdout || 0;
  });
 exec(epct, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.cputemp = stdout || 0;
  });
  exec(epcf, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.cpufreq = stdout || 0;
  });
  exec(epm, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.mpu = JSON.parse(stdout) || {}; 
  });
  exec(epth, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    console.log(JSON.parse(stdout))
    obj.dht = JSON.parse(stdout) || {};
  });
  //res.render(process.cwd() + "/views/sensors.ejs", { obj });
  res.json(obj)
});

module.exports = router;
