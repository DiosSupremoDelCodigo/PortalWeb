Delicias Gourmet — Prototipo Portal Administrativo
Breve: prototipo estático (HTML, CSS, JS) que simula el flujo de login y un dashboard administrativo con secciones estáticas (Menús, Reservas, Pedidos, Reportes, Configuración). Ideal para validar UX y requisitos antes de implementar backend real.

Estructura del repositorio
• 	index.html — pantalla de login (punto de entrada)
• 	dashboard.html — panel administrativo simulado
• 	styles.css — estilos principales
• 	script.js — validaciones de login y redirección simulada
• 	README.md — este archivo
• 	LICENSE — texto completo de la licencia MIT (opcional, recomendado)

Requisitos
• 	Git (para control de versiones y push a GitHub)
• 	Navegador moderno (Chrome, Edge, Firefox, Safari)
No requiere servidor ni dependencias adicionales.

Uso local (rápido)
1. 	Clona el repositorio: git clone https://github.com/tuusuario/nombre-repo.git
2. 	Accede a la carpeta: cd nombre-repo
3. 	Abre  en el navegador (doble clic o arrastrar al navegador).
Opcional: servir con un servidor estático local:
• 	Con Python 3: python -m http.server 8000 luego abrir http://localhost:8000/

Descripción funcional
• 	Login: validación cliente de email y contraseña (mínimo 6 caracteres). Mensajes inline accesibles.
• 	Simulación de autenticación:  usa un retardo para mostrar estado y luego redirige a . No hay verificación contra base de datos.
• 	Dashboard: menú lateral y secciones estáticas (tablas y botones visuales). Interacciones demostrativas sin lógica de negocio real.
• 	Estilos: diseño sobrio, responsive básico; rutas relativas para compatibilidad con GitHub Pages.

Deploy en GitHub Pages (resumen)
1. 	Crea el repo en GitHub y sube los archivos: git init git add . git commit -m "Initial: prototipo Delicias Gourmet" git branch -M main git remote add origin https://github.com/tuusuario/nombre-repo.git git push -u origin main
2. 	En GitHub: repo → Settings → Pages.
3. 	En Source selecciona Branch: main y Folder: / (root), luego Save.
4. 	Espera unos minutos y visita la URL generada: .
Nota: usa rutas relativas en  y  para que Pages sirva correctamente los archivos.

Mensajes de commit sugeridos
• 	Añadir página de login: git add index.html git commit -m "Añadir página de login (index.html) con formulario de acceso"
• 	Añadir dashboard: git add dashboard.html git commit -m "Añadir dashboard administrativo con menú lateral y secciones estáticas"
• 	Añadir estilos: git add styles.css git commit -m "Añadir hoja de estilos styles.css organizada por bloques"
• 	Añadir script: git add script.js git commit -m "Agregar script.js con validaciones de login y redirección simulada"
• 	Commit conjunto: git add . git commit -m "Initial: prototipo Delicias Gourmet (index, dashboard, styles, script)"

Siguientes pasos recomendados
• 	Reemplazar la simulación () por una llamada real (fetch/XHR) a tu API de autenticación.
• 	Proteger acceso al dashboard desde backend y manejar sesiones (tokens, cookies seguras).
• 	Mover estilos en línea a  y mejorar reglas responsive.
• 	Añadir tests de UI y validación cross-browser.
• 	Crear  si recibes colaboradores.

Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente bajo los términos de la licencia MIT. Si prefieres, incluye el archivo  con el texto completo.
