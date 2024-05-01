let arraySuits = [];
let arrayHeros = [];

const addHero = document.getElementById("btn-add-hero");
const btnAddSuit = document.getElementById("btn-add");

const nameHero = document.getElementById("name");
const ageHero = document.getElementById("age");
const codeNameHero = document.getElementById("codeName");
const suit = document.getElementById("suit");
const latHero = document.getElementById("lat");
const lonHero = document.getElementById("lon");

const urlHero = document.getElementById("url-hero"); //. html atributo url

const displaySuit = document.getElementById("div-suit-add"); //- html div
const imgHero = document.getElementById("img-hero"); //- html img

btnAddSuit.addEventListener("click", () => {
  const suitDiv = document.createElement("div"); //? DOC 1.
  suitDiv.className = "suit-add";
  suitDiv.innerHTML = `<input 
      type="text"
      name="suit"
      id="suit"
      class="form-control"
      placeholder="Suit..."
    />
    <button class="btn btn-primary btn-del">-</button>`;

  const btnDelSuit = suitDiv.querySelector(".btn-del"); //? DOC 2.
  btnDelSuit.addEventListener("click", () => {
    suitDiv.remove();
  });

  displaySuit.appendChild(suitDiv); //? DOC 3
});

// Add hero
addHero.addEventListener("click", () => {
  const hero = {
    name: nameHero.value,
    age: ageHero.value,
    codeName: codeNameHero.value,
    suits: [],
    lat: latHero.value,
    lon: lonHero.value,
    url: urlHero.value,
  };

  //? DOC 4
  const inputRecorrer = document.querySelectorAll(".suit-add input");
  inputRecorrer.forEach((input) => {
    hero.suits.push(input.value);
  });

  arrayHeros.push(hero);
  console.table(arrayHeros);

  // Esto lo tengo por si el profesor dice que debo limpiar los inputs

  // nameHero.value = "";
  // ageHero.value = "";
  // codeNameHero.value = "";
  // latHero.value = "";
  // lonHero.value = "";
  // urlHero.value = "";
  // displaySuit.innerHTML = "";
});
