const userInfo = require('../test-data/CapstoneUserData.json');
const formInfo = userInfo[2];
const filePath = "C:/Users/Georg/Desktop/Entri SW Testing/Entri Week 2/SGeorge_Module2PartAssignment2Due17Aug.docx";

class CapstonePracticeForm{
    constructor(page){
        this.page = page;
        this.practiceFormOptn = page.getByRole('link',{name: 'Practice Form'});
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.gender = page.getByRole('radio',{name:'Male', exact:true});
        this.mobNumber = page.locator('#userNumber');
        this.doBirth = page.locator('#dateOfBirthInput');
        this.hobbies1 = page.getByLabel('Sports');
        this.hobbies2 = page.getByLabel('Reading');
        this.hobbies3 = page.getByLabel('Music');
        this.pic = page.locator('#uploadPicture');
        this.currentAdd = page.locator('#currentAddress');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.submitButton = page.getByRole('button', {name: 'Submit Form'});
    }
    async goto(){
        await this.page.goto(process.env.CapstoneURL);
    }
    
    async practiceFormInfo(){
        await this.practiceFormOptn.click();
        await this.firstName.fill(formInfo.fName);
        await this.lastName.fill(formInfo.lName);
        await this.email.fill(formInfo.email);
        await this.gender.check();
        await this.mobNumber.fill(formInfo.mobNo);
        await this.doBirth.fill(formInfo.DOB);
        await this.hobbies1.check();
        await this.hobbies2.check();
        await this.hobbies3.check();
        await this.pic.setInputFiles(filePath);
        await this.currentAdd.fill(formInfo.Address);
        await this.state.selectOption({index: 1});
        await this.city.selectOption({index: 1});
        await this.submitButton.click();
    }
}
module.exports={CapstonePracticeForm}