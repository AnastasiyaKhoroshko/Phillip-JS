/* Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата".
Создать в объекте вложенный объект - "Приложение".
Создать в объекте "Приложение", вложенные объекты, "Заголовок, тело, футер, дата".
Создать методы для заполнения и отображения документа.
*/

let document1 = {
    title: "Собаки",
    body: "Візміть собаку з притулку",
    footer: "Напишіть нам на адресу test@gmail.com, або зателефонуйте за номером +380950000000",
    data: "22.12.2022",
    application: {
        title: "Бігль",
        body: "Найкращий собака в світі",
        footer: "Напишіть нам! Він чекає на вас",
        data: "23.12.2022",
    },
    show: function () {
        document.getElementById("doc").innerHTML = `<h1>${this.title}</h1><p>${this.body}</p>
        <footer>${this.footer}</footer><data>${this.data}</data>`
    },
    showApplic: function () {
        document.getElementById("doc").innerHTML += `<h2>${this.application.title}</h2><p>${this.application.body}</p>
        <footer>${this.application.footer}</footer><data>${this.application.data}</data>`
    }
}

document1.show();
document1.showApplic();