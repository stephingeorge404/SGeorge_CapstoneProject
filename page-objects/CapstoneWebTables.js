class CapstoneWebTables{
    constructor(page){
        this.page = page;
        this.webTablesOptn = page.getByRole('Link', {name: 'Web tables'});
        this.addButton = page.getByRole('Button', {name: 'Add'});  
        this.deleteRec = page.locator('[title = "Delete"]')       
    }
    async goto(){
        await this.page.goto(process.env.CapstoneURL);
    }
    async webTablesFunctn(){
        await this.webTablesOptn.click();
        await this.addButton.click();
        const deleteCount = await this.page.locator('[title = "Delete"]').count();
        for (let i = 0; i<deleteCount; i++){
            await this.deleteRec.nth(0).click();
        }
    }
}
module.exports = {CapstoneWebTables}
