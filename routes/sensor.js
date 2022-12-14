const express = require("express");
const { exec } = require("child_process");
const router = express.Router();
let obj = {};
router.get("/", async (req, res) => {
  let eph = `python ${process.cwd()}/PythonScripts/humidity.py`;
  let ept = `python ${process.cwd()}/PythonScripts/temp.py`
  let epv = `python ${process.cwd()}/PythonScripts/voltage.py`
  let epct = `python ${process.cwd()}/PythonScripts/cputemp.py`
  let epcf = `python ${process.cwd()}/PythonScripts/cpufreq.py`
  exec(eph, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.humidity = stdout;
  });
  exec(ept, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.temperature = stdout;
  });
  exec(epv, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.voltage = stdout;
  });
 exec(epct, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.cputemp = stdout;
  });
  exec(epcf, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr.message}`);
    }
    obj.cpufreq = stdout;
  });
  res.render(process.cwd() + "/views/sensors.ejs", { obj });
});

module.exports = router;
