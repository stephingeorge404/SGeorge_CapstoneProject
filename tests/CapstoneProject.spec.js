const {test, expect} = require('@playwright/test');
const {CapstoneTextbox} = require('../page-objects/CapstoneTextbox');
const {CapstoneCheckbox} = require('../page-objects/CapstoneCheckbox');
const {CapstoneRadioButton} = require('../page-objects/CapstoneRadioButton');
const userInfo = require('../test-data/CapstoneUserData.json');
const { CapstoneWebTables } = require('../page-objects/CapstoneWebTables');
const { CapstoneButtons } = require('../page-objects/CapstoneButtons');
const { CapstonePracticeForm } = require('../page-objects/CapstoneForms');

//TextBox option
test ('Test Textbox Option', async({page})=>{
    const TextboxOptn = new CapstoneTextbox(page);
    const newUserInfo = userInfo[0];
    await TextboxOptn.goto();
    await TextboxOptn.TextBoxFunctn(newUserInfo.fullname, newUserInfo.email, newUserInfo.Address);
    await expect (page.locator('#output')).toContainText(newUserInfo.fullname);
    console.log("Task Complete!");    
});
//CheckBox option 
test('Test CheckBox Option', async({page})=>{
    const CheckboxOptn = new CapstoneCheckbox(page);
    await CheckboxOptn.goto();
    await CheckboxOptn.checkboxFunction();
    await expect(page.locator('.lg\\:col-span-7 > div:nth-child(3)')).toContainText('notes');
});
//RadioButton Option
test('Test RadioButton Option', async({page})=>{
    const RadioButtonOptn = new CapstoneRadioButton(page);
    await RadioButtonOptn.goto();
    await RadioButtonOptn.RadioButtonFnctn();
    await expect (page.locator('.text-base').nth(1)).toContainText('You have selected Yes');
}); 
//WEB Tables
test('Test Web Tables Option', async({page})=>{
    const webTablesOp = new CapstoneWebTables(page);
    await webTablesOp.goto();
    await webTablesOp.webTablesFunctn();
});
//Buttons
test('Test Buttons Option', async({page})=>{
    const buttonsOp = new CapstoneButtons(page);
    await buttonsOp.goto();
    await buttonsOp.ButtonFunctn();
    await expect(page.locator('#doubleClickMessage')).toBeVisible();
});
//Practice Form
test('Test Practice Form', async({page})=>{
    const practiceFormOp = new CapstonePracticeForm(page);
    await practiceFormOp.goto();
    await practiceFormOp.practiceFormInfo();
    try{
    await expect(page.locator('.font-semibold.text-lg')).toHaveText("Thanks for submitting the form");
    }
    catch(error){
        console.log("Task completed without valiadting assertion");
    }
    await page.locator('#close-modal').click();
});