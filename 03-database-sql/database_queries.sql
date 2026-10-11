-- =================================================================
-- PROYECTO QA: Automatización y Pruebas - Automation Exercise
-- Archivo: database_queries.sql
-- Descripción: Consultas utilizadas para la validación y trazabilidad de datos.
-- =================================================================

-- 1. Consultar todos los usuarios registrados en el sistema
SELECT id, name, email, title, birth_date, created_at 
FROM users 
ORDER BY id DESC;

-- 2. Validar la existencia de un usuario específico por correo electrónico (TC-002)
SELECT * 
FROM users 
WHERE email = 'josefina.test@qa.com';

-- 3. Consultar las órdenes de compra generadas tras el proceso de Checkout (TC-006)
SELECT order_id, customer_email, total_amount, payment_status, created_at 
FROM orders 
ORDER BY created_at DESC;

-- 4. Verificar el stock actual de los productos evaluados en el carrito (TC-004)
SELECT product_id, product_name, category, price, stock 
FROM products 
WHERE stock > 0;