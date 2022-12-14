const express = require("express");
const { exec } = require("child_process");
const router = express.Router();
let obj = {};
router.get("/", async (req, res) => {
  let eph = "python D:/systems/FullStack/Omarichet/Backend/PythonScripts/humidity.py";
  let ept = "python D:/systems/FullStack/Omarichet/Backend/PythonScripts/temp.py"
  let epv = "python D:/systems/FullStack/Omarichet/Backend/PythonScripts/voltage.py"
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
  res.render(process.cwd() + "/views/sensors.ejs", { obj });
});

module.exports = router;
