class DashboardPage {
    constructor(page) {
        this.page = page;
        this.cartButton = page.getByRole('button', { name: '   Cart' });
        this.addToCartButtons = page.getByRole('button', { name: ' Add To Cart' });
    }

    async addFirstProductToCart() {
        await this.addToCartButtons.nth(1).click();
    }

    async goToCart() {
        await this.cartButton.click();
    }
}

module.exports = DashboardPage;
