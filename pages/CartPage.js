class CartPage {

    constructor(page){

        this.page = page;

    }


    async removeProduct(productName){

        const product = this.page
            .locator('.cart_item')
            .filter({
                hasText: productName
            });

        await product
            .getByRole('button', {
                name: 'Remove'
            })
            .click();

    }

}


module.exports = CartPage;