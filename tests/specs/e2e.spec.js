const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const CartPage = require('../pages/CartPage');
const testData = require('../utils/testData');

test('End-to-end purchase flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(testData.userEmail, testData.userPassword);

    await dashboardPage.addFirstProductToCart();
    await dashboardPage.goToCart();

    await cartPage.checkout();

    // Add assertions if necessary to verify checkout was successful
    await expect(page).toHaveURL(/order/);
});
