// =================================================================
// PROYECTO QA: Automatización con Playwright
// Archivo: login.spec.js
// Caso de Prueba asociado: TC-003 (Login de usuario exitoso)
// =================================================================

const { test, expect } = require('@playwright/test');

test('Validar inicio de sesión exitoso en Automation Exercise', async ({ page }) => {
    // 1. Navegar a la página principal de Automation Exercise
    await page.goto('https://automationexercise.com/');

    // 2. Hacer clic en el botón de Signup / Login
    await page.click('a[href="/login"]');

    // 3. Verificar que estamos en la sección de login
    await expect(page.locator('h2:text("Login to your account")')).toBeVisible();

    // 4. Ingresar las credenciales válidas
    await page.fill('input[data-qa="login-email"]', 'josefina.test@qa.com');
    await page.fill('input[data-qa="login-password"]', 'Password123*');

    // 5. Presionar el botón de Login
    await page.click('button[data-qa="login-button"]');

    // 6. Aserción: Verificar que el usuario inició sesión correctamente ("Logged in as Username")
    const loggedInUserText = page.locator('a:text("Logged in as")');
    await expect(loggedInUserText).toBeVisible();
    
    // Captura de evidencia final de la prueba automatizada
    await page.screenshot({ path: 'evidencias/TC-003-login-exitoso.png' });
});