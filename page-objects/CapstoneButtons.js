class CapstoneButtons{
    constructor(page){
        this.page = page;
        this.dClick = page.getByRole('button', {name: 'Double Click Me'});
        this.rClick = page.getByRole('button', {name: 'Right Click Me'});
        this.lClick = page.getByRole('button', {name: 'Click Me', exact: true});
    }
    async goto(){
        await this.page.goto(process.env.CapstoneURL);
    }
    async ButtonFunctn(){
        await this.dClick.dblclick();
        await this.rClick.click({button: 'right'});
        await this.lClick.click();
    }
}
module.exports={CapstoneButtons}