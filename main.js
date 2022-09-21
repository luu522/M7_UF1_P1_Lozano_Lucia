function handle_form_submission(){
  let nombre = document.getElementById("nombre").value;
  result = nombre.toUpperCase();
  alert('LA RESERVA SE HA GUARDADO A NOMBRE DE ' + result);
  return false;
}