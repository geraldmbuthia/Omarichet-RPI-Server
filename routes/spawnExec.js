const express = require("express");
const { spawn } = require("child_process");
const router = express.Router();
const ls = spawn ("python", ["D:/systems/FullStack/Omarichet/Backend/PythonScripts/humidityInfinite.py"]);
let obj = {};

router.get("/", async (req, res) => {
  ls.stdout.on("data", (data) => {
    obj.humidity = data;
    obj.temperature = data;
    console.log(`stdout: ${data}`);
  });
  ls.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });
  ls.on("error", (error) => {
    console.log(`error ${error.message}`);
  });
  ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
  res.render(process.cwd() + "/views/sensors.ejs", { obj });
});
module.exports = router;
