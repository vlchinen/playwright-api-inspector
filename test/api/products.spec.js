const { test, expect } = require('@playwright/test');


test('GET products API should return product list', async ({ request }) => {

    const response = await request.get(
        'https://dummyjson.com/products'
    );

    expect(response.status())
        .toBe(200);


    const body = await response.json();


    expect(body.products.length)
        .toBeGreaterThan(0);

});



test('GET single product should return correct product', async ({ request }) => {


    const response = await request.get(
        'https://dummyjson.com/products/1'
    );


    expect(response.status())
        .toBe(200);



    const body = await response.json();



    expect(body.id)
        .toBe(1);



    expect(body)
        .toHaveProperty('title');


});