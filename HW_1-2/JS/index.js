/* Використовуючи циклічні конструкції, пробіли (&nbsp; ) та зірки (*) намалюйте: 

1. Порожній прямокутник  */
document.write("1. Порожній прямокутник </br> </br>");
for (let i = 0; i < 10; i++) {
    if (i === 0 || i === 9) {
        for (let j = 0; j < 10; j++) {
            document.write("*");
        }
    } else if (i > 0 && i < 9) {
        document.write("*");
        for (let k = 0; k < 16; k++) {
            document.write("&nbsp;");
        }
        document.write("*");
    }

    document.write("</br>");
}

document.write("</br> </br>");

// 2. Заповнений  Трикутник прямокутний
document.write("2. Заповнений прямокутний трикутник </br> </br>");
for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j > 0; j--) {
        document.write("*");
    }
    document.write("</br>");
}
document.write("</br> </br>");

/* 3. Заповнений рівнобедренний трикутник */
document.write("3. Заповнений рівнобедренний трикутник  </br> </br>");
for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
        document.write("&nbsp;");
    }
    for (let y = i + 1; y > 0; y--) {
        document.write("*");
    }
    document.write("</br>");
}

document.write("</br> </br>");

// 4. Заповнений ромб (варіант 1)

document.write("4. Заповнений ромб (варіант 1) </br> </br>");
for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
        document.write("&nbsp;");
    }
    for (let y = i + 1; y > 0; y--) {
        document.write("*");
    }
    document.write("</br>");
};
for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j > 0; j--) {
        document.write("&nbsp;");
    }
    for (let y = i + 1; y < 10; y++) {
        document.write("*");
    }
    document.write("</br>");
};

document.write("</br> </br>");

// 4. Заповнений ромб (варіант 2)

document.write("4. Заповнений ромб (варіант 2) </br> </br>");
for (let i = 0; i < 10; i++) {
    for (let j = i * 2 + 1; j < 20; j++) {
        document.write("&nbsp;");
    }
    for (let y = (i * 2) + 1; y > 0; y--) {
        document.write("*");
    }
    document.write("</br>");
}
for (let i = 0; i < 9; i++) {
    for (let j = i * 2 + 3; j > 0; j--) {
        document.write("&nbsp;");
    }
    for (let y = i * 2 + 1; y < 18; y++) {
        document.write("*");
    }
    document.write("</br>");
}