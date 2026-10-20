const { expect, chromium } = require("@playwright/test");// This is a import
require('dotenv').config();

const config=({
  testdir:'./tests',
  //retries:1,
  fullyParallel: true, //to run in parallel
  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  reporter:'html',
  use:{
    browsername:'chromium',
    headless:false,
    //slowMo: 80000
  },
})
module.exports=config;
