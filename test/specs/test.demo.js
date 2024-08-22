describe('SauceDemo User Tests', async () => {
    it('Login successfully', async () => {
        await browser.url('https://www.saucedemo.com/');
        
        // Login
        const usernameInput = await $('#user-name');
        const passwordInput = await $('#password');
        const LoginButton = await $('#login-button');
        
        await usernameInput.setValue('standard_user');
        await passwordInput.setValue('secret_sauce');
        await LoginButton.click();
        
        // Validate successful login
        const dashboardUrl = await browser.getUrl();
        expect(dashboardUrl).toContain('/inventory.html');
    });

    it('Add item to cart', async () => {
        // Add item to cart
        const AdditemButton = await $('#add-to-cart-sauce-labs-bike-light');
        await AdditemButton.click();

        // Validate item in the cart
        const cartBadge = await $('.shopping_cart_badge');
        expect(await cartBadge.getText()).toEqual('1');

        //validate the item is sauce labs bike light
        await browser.url('https://www.saucedemo.com/cart.html');
        const cartItemName = await $('.inventory_item_name');
        expect(await cartItemName.getText()).toEqual('Sauce Labs Bike Light');

    });
    
});
