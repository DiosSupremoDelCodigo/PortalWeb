/*
  Simulación de validaciones de login (cliente).
  - Validaciones:
    * email requerido y formato básico
    * password requerido y longitud mínima
  - Muestra mensajes de error en línea sin enviar el formulario
  - Simula "login exitoso" redirigiendo a dashboard.html tras 700 ms
  Compatibilidad: JavaScript ES5 para navegadores antiguos.
*/

(function () {
  // Configuración de validación
  var MIN_PASSWORD_LENGTH = 6;
  var REDIRECT_DELAY_MS = 700; // demora para simular procesamiento

  // Utilidades simples
  function qs(selector, ctx) {
    ctx = ctx || document;
    return ctx.querySelector(selector);
  }
  function qsa(selector, ctx) {
    ctx = ctx || document;
    return ctx.querySelectorAll(selector);
  }
  function createEl(tag, text) {
    var el = document.createElement(tag);
    if (text) { el.appendChild(document.createTextNode(text)); }
    return el;
  }

  // Mensajes de error: asegura un contenedor justo después del input
  function showError(input, message) {
    clearError(input);
    var err = createEl('div');
    err.className = 'field-error';
    err.setAttribute('role', 'alert');
    err.appendChild(document.createTextNode(message));
    // estilo en línea básico para compatibilidad CSS2
    err.style.color = '#b00020';
    err.style.fontSize = '12px';
    err.style.marginTop = '4px';
    input.parentNode.insertBefore(err, input.nextSibling);
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input) {
    input.removeAttribute('aria-invalid');
    var next = input.nextSibling;
    while (next && next.nodeType !== 1) { next = next.nextSibling; } // skip text nodes
    if (next && next.className === 'field-error') {
      next.parentNode.removeChild(next);
    }
  }

  // Validadores
  function isEmpty(value) {
    return !value || value.replace(/^\s+|\s+$/g, '') === '';
  }

  function isValidEmail(value) {
    // Validación básica RFC-like: contiene @ y un dominio con punto
    // No se usa expresión compleja para compatibilidad y simplicidad.
    return /\S+@\S+\.\S+/.test(value);
  }

  // Inicialización al cargar DOM
  function init() {
    var form = qs('form.form');
    if (!form) { return; }

    var inputEmail = qs('#email', form);
    var inputPassword = qs('#password', form);

    // Añadir atributos HTML5 no destructivos si el navegador los soporta
    try {
      inputEmail.setAttribute('autocomplete', 'username');
      inputPassword.setAttribute('autocomplete', 'current-password');
    } catch (e) { /* ignore en navegadores muy antiguos */ }

    // Manejo submit
    form.addEventListener('submit', function (evt) {
      // Evita envío real hasta validar
      if (evt.preventDefault) { evt.preventDefault(); } else { evt.returnValue = false; }

      // Limpiar errores previos
      clearError(inputEmail);
      clearError(inputPassword);

      var email = inputEmail.value || '';
      var password = inputPassword.value || '';
      var hasError = false;

      // Validar email
      if (isEmpty(email)) {
        showError(inputEmail, 'El correo electrónico es obligatorio.');
        hasError = true;
      } else if (!isValidEmail(email)) {
        showError(inputEmail, 'Ingresa un correo válido (ej: usuario@dominio.cl).');
        hasError = true;
      }

      // Validar password
      if (isEmpty(password)) {
        showError(inputPassword, 'La contraseña es obligatoria.');
        hasError = true;
      } else if (password.length < MIN_PASSWORD_LENGTH) {
        showError(inputPassword, 'La contraseña debe tener al menos ' + MIN_PASSWORD_LENGTH + ' caracteres.');
        hasError = true;
      }

      if (hasError) {
        // Colocar foco en el primer campo con error
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid && firstInvalid.focus) { firstInvalid.focus(); }
        return;
      }

      // Simulación de proceso de login (disable inputs y mostrar estado)
      disableForm(form, true);
      showStatus(form, 'Validando credenciales...');

      // Simula llamada al servidor y redirección en caso de "éxito"
      setTimeout(function () {
        showStatus(form, 'Acceso exitoso. Redirigiendo...');
        // redirige a dashboard.html
        window.location.href = form.getAttribute('action') || 'dashboard.html';
      }, REDIRECT_DELAY_MS);
    }, false);

    // Limpia mensajes de error al escribir
    inputEmail.addEventListener('input', function () { clearError(inputEmail); }, false);
    inputPassword.addEventListener('input', function () { clearError(inputPassword); }, false);
  }

  // Desactiva/activa inputs y botones del form
  function disableForm(form, disable) {
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
      try {
        elements[i].disabled = !!disable;
      } catch (e) {}
    }
  }

  // Muestra un pequeño mensaje de estado al final del form
  function showStatus(form, message) {
    var existing = form.querySelector('.form-status');
    if (existing) {
      existing.innerHTML = message;
      return;
    }
    var status = createEl('div');
    status.className = 'form-status';
    status.style.marginTop = '10px';
    status.style.fontSize = '13px';
    status.style.color = '#1f497d';
    status.appendChild(document.createTextNode(message));
    form.appendChild(status);
  }

  // Ejecutar init cuando DOM esté listo
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Timeout 0 para asegurar que elementos estén disponibles
    setTimeout(init, 0);
  } else {
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', init, false);
    } else {
      // IE8 fallback
      window.attachEvent('onload', init);
    }
  }
})();