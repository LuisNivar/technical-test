const $form = document.querySelector(".search");
const $clearButton = $form.querySelector("#clear");

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipisicing dolor. Quis inventore excepturi ex. Nihil delectus alias itaque! Voluptatibus inventore nisi, molestiae minima officiis corrupti sunt nisi adipisci quidem alias voluptas. Excepturi, nisi iusto amet culpa!";

$clearButton.addEventListener("click", () => {
  const $input = $form.querySelector("input");

  if ($input) $input.value = "";

  const $words = document.querySelectorAll("word");

  for (const word of $words) {
    word.classList.remove("found");
  }
});

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { search } = Object.fromEntries(formData.entries());

  const $words = document.querySelectorAll("word");

  for (const word of $words) {
    const value = word.textContent;

    if (value !== "" && value === search) {
      word.classList.add("found");
    } else {
      word.classList.remove("found");
    }
  }
});

function LoadWords(paragraph) {
  const words = paragraph.split(/\s|\,|\./);
  const $container = document.querySelector(".container");

  const html = words.map((word) => `<word>${word}</word>`).join("\n");

  $container.innerHTML = html;
}

LoadWords(TEXT);
