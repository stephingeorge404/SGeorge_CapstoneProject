const { expect, chromium, devices } = require("@playwright/test");
require('dotenv').config();
const config=({
  testdir:'./test',
  //retries:1, //to handle Flaky test
  workers:3,
  fullyParallel: true,  //to run in parallel
  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  reporter:'html',
  projects:[{

  name:'Sapharie',

  use:{
    browsername:'Webkit',
    headless:true,
    screenshot:'on',
    trace:'on'
  },
},
{
name:'chrome',
use:{
    browsername:'chromium',
    headless:false,
    //viewport:{width:720,height:720},
   // ...devices['iPhone 11'],
    ignoreHttpserror:true,
    Permissions:['geolocation'],
    screenshot:'on',
    trace:'on',  //default trace mode
    trace: 'retain-on-failure',
    video:'retain-on-failure',
    video:'on',
    launchOptions: {
            slowMo: 1000
        }
  },
}
]
})
module.exports=config;

///npx playwright test clientappobject.spec.js --config playwright.config1.js 
///npx playwright test clientappobject.spec.js --config playwright.config1.js project==chrome
///npx playwright show-report    to get report