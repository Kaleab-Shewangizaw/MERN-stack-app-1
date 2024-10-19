// const express = require('express'); instead of this we can use modern way by adding "type": "module", in the package.json

// so the other way will be:

import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("server is running at 3000!");
});
