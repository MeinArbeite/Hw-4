// Meine aufgabe 
const place= document.querySelector(".result")
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    data.forEach(element => {
        place.append(
            `${element.id}
            ${element.img}
            ${element.title}
            ${element.description}
            ${element.price}`
        )
    })
}
xhr.send();

