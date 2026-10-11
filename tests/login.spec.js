const { test, expect } = require('@playwright/test');

test('Prueba automatizada de Login con validación', async ({ page }) => {
  // 1. Ir a la página principal de Automation Exercise
  await page.goto('https://automationexercise.com/');

  // 2. Hacer clic en el botón "Signup / Login"
  await page.click('a[href="/login"]');

  // 3. Escribir credenciales de prueba
  await page.fill('input[data-qa="login-email"]', 'prueba_qa@gmail.com');
  await page.fill('input[data-qa="login-password"]', 'Password123');

  // 4. Hacer clic en el botón de Login
  await page.click('button[data-qa="login-button"]');

  // 5. ASERCIÓN (Validación): Verificar que aparezca el mensaje de error esperado
  // (Automation Exercise muestra este texto cuando el usuario o contraseña son incorrectos)
  const mensajeError = page.locator('form[action="/login"] p');
  await expect(mensajeError).toHaveText('Your email or password is incorrect!');

  // Esperar un par de segundos para ver el resultado en pantalla
  await page.waitForTimeout(2000);
});