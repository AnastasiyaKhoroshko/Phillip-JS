/* При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола.
  При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл(10 * 10) випадкового кольору.
    При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися,
    тобто всі інші кола зрушуються вліво.
*/
let button = document.querySelector(".btn");

button.addEventListener("click", addInput);

function addInput() {
    document.body.insertAdjacentHTML("beforeend", `<br><input type="text" name="inputDiameter" id="inputDiameter"/>
    <button id="drawBtn">Намалювати</button>`);
    let drawBtn = document.querySelector("#drawBtn");
    drawBtn.addEventListener("click", drawCercle);
}

function drawCercle() {
    document.body.insertAdjacentHTML("beforeend", `<div class="cercle"></div>`);
    let container = document.querySelector(".cercle");
    let inputDiameter = document.querySelector("#inputDiameter");
    let diameter = inputDiameter.value;
    let count = 1;
    while (count <= 100) {
        let div = document.createElement("div");
        div.className = "cercleItem";
        div.style.width = `${diameter}px`;
        div.style.height = `${diameter}px`;
        div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
        container.append(div);
        count++;
    }
    let cercle = document.querySelectorAll(".cercleItem");
    cercle.forEach((item) => item.addEventListener("click", removeCercle));
}

function removeCercle(event) {
    console.log(event.target);
    event.target.style.display = "none";
}



