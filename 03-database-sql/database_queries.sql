-- ============================================================
-- VERIFICACIÓN DE BASE DE DATOS - AUTOMATION EXERCISE
-- Proyecto de Testing QA Funcional, API y Base de Datos
-- ============================================================

-- 1. VALIDACIÓN DE REGISTRO DE USUARIO (TC-001)
-- Verifica que el nuevo usuario creado desde la UI o API se haya insertado correctamente.
SELECT 
    id, 
    name, 
    email, 
    created_at 
FROM users 
WHERE email = 'usuario_prueba@example.com';


-- 2. INVESTIGACIÓN DE HALLAZGO / BUG REPORT (BUG-001 / TC-005)
-- Consulta para detectar entradas de usuario no sanitizadas en el campo 'Name' 
-- (búsqueda de posibles inyecciones XSS/SQL o nombres con exceso de caracteres).
SELECT 
    id, 
    name, 
    email 
FROM users 
WHERE name LIKE '%