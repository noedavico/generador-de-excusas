window.onload;
{
  const excuse = document.querySelector("#excuse");
  let who = [
    "El perro",
    "Mi abuela",
    "El Gato",
    "Mi vecino",
    "Mi hijo",
    "El cerdo"
  ];
  let action = ["comió", "destruyo", "meó", "aplastó", "rompió", "escondio"];
  let what = [
    "mi tarea",
    "las llaves",
    "el auto",
    "el celular",
    "el control",
    "la planta",
    "el libro"
  ];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando jugaba",
    "durante mi almuerzo",
    "mientras estaba orando",
    "cuando meditaba",
    "mientras me duchaba",
    "cuando dormia",
    "mientras estudiaba",
    "cuando estaba trabajando"
  ];
  let rand_who = Math.floor(Math.random() * who.length);
  let rand_action = Math.floor(Math.random() * action.length);
  let rand_what = Math.floor(Math.random() * what.length);
  let rand_when = Math.floor(Math.random() * when.length);

  excuse.innerHTML = `${who[rand_who]}
  ${action[rand_action]}
    ${what[rand_what]}
      ${when[rand_when]}`;
}
