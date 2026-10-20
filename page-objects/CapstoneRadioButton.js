class CapstoneRadioButton{
    constructor(page){
        this.page = page;
        this.radioButtonOption = page.getByRole('link',{name:'Radio Button'});
        this.responseRadioB = page.getByText('Yes').nth(0);        
    }
    async goto(){
        await this.page.goto(process.env.CapstoneURL);
    }
    async RadioButtonFnctn(){
        await this.radioButtonOption.click();
        await this.responseRadioB.click();
    }
}
module.exports = {CapstoneRadioButton};