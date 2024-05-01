# Documentación JS

1. Crear un "nodo" o etiqueta HTML de tipo `div` con la clase `suit-add`

```
const suitDiv = document.createElement("div");
  suitDiv.className = "suit-add";
```

2. `btnDelSuit` hace referencia a el _div_ con la clase _suit-add_ y se utiliza `suitDiv.remove();` para eliminar el _div_ con dicha clase cuando se pulse el botón `btnDelSuit`

```
const btnDelSuit = suitDiv.querySelector(".btn-del");
  btnDelSuit.addEventListener("click", () => {
    suitDiv.remove();
  });
```

3. Se usa `appendChild();` para añadir etiquetas o información **hijas** dentro de un contenedor **padre**

`displaySuit.appendChild(suitDiv);` _displaySuit_ hace referencia al **div** que va a contener cada _suit_ (suitDiv)

`const displaySuit = document.getElementById("div-suit-add");`
_Inicialización de `displaySuit`_

4. Se recorren los _inputs_ que están dentro del _div_ `suit-add`

```
const inputRecorrer = document.querySelectorAll(".suit-add input");
  inputRecorrer.forEach((input) => {
    hero.suits.push(input.value);
  });
```

- **hero** hace referencia al objeto que almacenara el héroe
- El atributo `hero.suits` es un _array_ por lo tanto se puede hacer un `.push()` directamente de lo que haya en el input (`input.value`)

5. Por ultimo se envía el **Objeto** `hero` al array de heroes `arrayHeros` y posteriormente se imprime en una _tabla_ para mejor visualización

```
  arrayHeros.push(hero);
  console.table(arrayHeros);
```

<hr>

_Redactado y revisado por José Martínez - 2024_

[josemartinezrdev](https://github.com/josemartinezrdev)

[Repositorio](https://github.com/josemartinezrdev/SuperHeroes)

[Sitio web](https://josemartinezrdev.github.io/SuperHeroes/)
