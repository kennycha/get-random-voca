const onWindowLoad = () => {
  const wordElement = document.querySelector("#word");
  const definitionElement = document.querySelector("#definition");
  const toastElement = document.querySelector("#toast");
  const fetchButton = document.querySelector("#fetchButton");

  const onButtonClick = async () => {
    fetchButton.disabled = true;
    const res = await fetch("https://random-words-api.vercel.app/word");
    const array = await res.json();
    const { word, definition } = array[0];
    wordElement.innerText = word;
    definitionElement.innerText = definition;
    fetchButton.disabled = false;
  };

  fetchButton.onclick = onButtonClick;

  const onWordElementClick = () => {
    navigator.clipboard.writeText(wordElement.innerText);

    toastElement.style.opacity = 1;
    setTimeout(() => {
      toastElement.style.opacity = 0;
    }, 500);
  };

  wordElement.onclick = onWordElementClick;
};

window.onload = onWindowLoad;
