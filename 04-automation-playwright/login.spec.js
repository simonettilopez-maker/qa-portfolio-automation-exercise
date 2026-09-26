// ============================================================
// AUTOMATIZACIÓN DE PRUEBAS CON PLAYWRIGHT
// Caso de Prueba: TC-002 - Iniciar Sesión con Credenciales Válidas
// ============================================================

const { test, expect } = require('@playwright/test');

test.describe('Módulo de Autenticación - Automation Exercise', () => {

  test('TC-002: Iniciar sesión exitosamente con usuario registrado', async ({ page }) => {
    // 1. Navegar a la página principal
    await page.goto('https://automationexercise.com');

    // 2. Hacer clic en la sección 'Signup / Login'
    await page.click('a[href="/login"]');

    // 3. Validar que el título 'Login to your account' sea visible
    const loginHeader = page.locator('.login-form h2');
    await expect(loginHeader).toHaveText('Login to your account');

    // 4. Ingresar correo y contraseña en el formulario
    await page.fill('input[data-qa="login-email"]', 'usuario_prueba@example.com');
    await page.fill('input[data-qa="login-password"]', 'Password123');

    // 5. Hacer clic en el botón de Iniciar Sesión
    await page.click('button[data-qa="login-button"]');

    // 6. Aserción: Verificar que la barra superior confirme el inicio de sesión
    const loggedInText = page.locator('text=Logged in as');
    await expect(loggedInText).toBeVisible();
  });

});