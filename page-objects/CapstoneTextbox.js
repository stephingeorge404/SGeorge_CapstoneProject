class CapstoneTextbox{
    constructor(page){
        this.page = page;
        this.textboxOption = page.getByRole('link', {name:'Text Box'});
        this.fName = page.getByPlaceholder('John Doe');
        this.email = page.locator('#userEmail');
        this.currentAdd = page.locator('#currentAddress');
        this.permanentAdd = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
    }
    async goto() {
        await this.page.goto(process.env.CapstoneURL);
    }
    async TextBoxFunctn(name, email, Address){
        await this.textboxOption.click();
        await this.fName.fill(name);
        await this.email.fill(email);
        await this.currentAdd.fill(Address);
        await this.permanentAdd.fill(Address);
        await this.submitButton.click();
    }
}
module.exports = {CapstoneTextbox};