const prompt = document.querySelector("#prompt");
const el = document.querySelector("button");

function publish() {
  prompt.innerText = "Website published";
}
el.onclick = publish;
