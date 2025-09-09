class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.getByRole('button', { name: 'Checkout❯' });
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;
