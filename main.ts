import users from "./data/users";
import displayJsonToHtml from "./displayJsonToHtml";

const appDiv: HTMLElement | null = document.getElementById('app');
let htmlCode : string = `<h1>Exercice TypeScript</h1>`;

if (appDiv) {
  appDiv.innerHTML += displayJsonToHtml(users);
}
