class LoginPage {


    constructor(page){

        this.page = page;


        this.usernameInput =
            page.locator('#user-name');


        this.passwordInput =
            page.locator('#password');


        this.loginButton =
            page.locator('#login-button');


        this.inventoryTitle =
            page.locator('.title');

        this.inventoryName =
            page.locator('.inventory_item_name');

    }



    async goto(){

        await this.page.goto(
            'https://www.saucedemo.com'
        );

    }



    async login(username,password){

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }


}


module.exports = LoginPage;