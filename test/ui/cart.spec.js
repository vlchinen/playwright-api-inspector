const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const cartPage = require('../../pages/CartPage')

test('User can add and remove product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const CartPage = new cartPage(page)

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

    await inventoryPage.openCart();

    await CartPage.removeProduct(
        'Sauce Labs Backpack'
    );

    await expect(inventoryPage.cartBadge)
    
});