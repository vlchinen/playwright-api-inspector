const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');


test('User can add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);


    await loginPage.goto();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );


    await inventoryPage.addProduct(
        'Sauce Labs Backpack'
    );


    await expect(inventoryPage.cartBadge)
        .toHaveText('1');

});