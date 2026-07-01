const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');



test('user can login successfully', async ({page})=>{


    const loginPage = new LoginPage(page);



    await loginPage.goto();



    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );



    await expect(page)
        .toHaveURL(/inventory/);



    await expect(loginPage.inventoryTitle)
    .toBeVisible();

    await expect(loginPage.inventoryTitle)
        .toHaveText('Products');

    await expect(loginPage.inventoryName.first())
        .toHaveText('Sauce Labs Backpack') 

});