class CapstoneCheckbox{
    constructor(page){
        this.page = page;
        this.checkBoxOption = page.getByRole('link',{name: 'Check Box'});
        this.expandAll = page.getByText("Expand all");
        this.notesCheckbox = page.locator('.ml-6 > div:nth-child(2) > div > div:nth-child(2) > div > .flex.items-center.gap-2 > .w-5.h-5').first();
        this.commandsCheckbox = page.locator('.ml-6 > div:nth-child(2) > div:nth-child(2) > .flex.items-center.gap-2 > .w-5.h-5').first();
        this.workspaceCheckbox = page.locator('.ml-6 > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > .w-5').first();
        this.officeCheckbox = page.locator('.ml-6 > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > .w-5').first();
        this.downloadsCheckbox = page.locator('.p-4 > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > .w-5');
    }
    async goto(){
        await this.page.goto(process.env.CapstoneURL);
    }
    async checkboxFunction(){
        await this.checkBoxOption.click();
        await this.expandAll.click();
        await this.notesCheckbox.click();
        await this.commandsCheckbox.click();
        await this.workspaceCheckbox.click();
        await this.officeCheckbox.click();
        await this.downloadsCheckbox.click();
    };
};

module.exports = {CapstoneCheckbox}

//Home checkbox checks all underlying boxes.
//checking all underlying boxes doesn't check Home checkbox.