function aceptarPedido(btn) {
  const row = btn.closest('tr');
  const statusSpan = row.querySelector('td:nth-child(4) span');
  statusSpan.textContent = 'Aceptado';
  statusSpan.className = 'status en-preparacion';
  row.querySelectorAll('button').forEach(b => b.disabled = true);
  alert('Pedido aceptado para cocina.');
}

function rechazarPedido(btn) {
  const row = btn.closest('tr');
  const statusSpan = row.querySelector('td:nth-child(4) span');
  statusSpan.textContent = 'Rechazado';
  statusSpan.className = 'status rechazado';
  row.querySelectorAll('button').forEach(b => b.disabled = true);
  alert('Pedido rechazado.');
}

function toggleUrgente(btn) {
  if (btn.classList.contains('btn-urgent')) {
    btn.textContent = btn.textContent.includes('Marcar') ? 'Urgente' : 'Marcar urgente';
    btn.classList.toggle('btn-urgent');
  }
}

function guardarIncidencia(textarea) {
  // Aquí se podría guardar la incidencia, por ahora no hace nada
}

function marcarInicioPreparacion(btn) {
  const row = btn.closest('tr');
  const statusSpan = row.querySelector('td:nth-child(3) span');
  statusSpan.textContent = 'En preparación';
  statusSpan.className = 'status en-preparacion';
  btn.disabled = true;
  row.querySelector('button:nth-child(2)').disabled = false;
}

function marcarFinPreparacion(btn) {
  const row = btn.closest('tr');
  const statusSpan = row.querySelector('td:nth-child(3) span');
  statusSpan.textContent = 'Listo para despacho';
  statusSpan.className = 'status listo';
  btn.disabled = true;
}
