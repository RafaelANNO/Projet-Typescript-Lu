import users from "./data/users";
import displayJsonToHtml from "./displayJsonToHtml";

const appDiv: HTMLElement | null = document.getElementById('app');

if (appDiv) {
  appDiv.innerHTML += `<h1>Exercice TypeScript</h1>`;
  appDiv.innerHTML += displayJsonToHtml(users);
}
