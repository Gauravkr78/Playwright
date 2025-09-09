class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'email@example.com' });
        this.passwordInput = page.getByRole('textbox', { name: 'enter your passsword' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
