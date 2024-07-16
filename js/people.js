people = document.getElementById("people");

peopleData.forEach(person => {
    const col = document.createElement("div");
    col.classList.add("col-lg-3");
    col.classList.add("col-sm-6");
    col.classList.add("col-spacing");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("d-block");
    img.classList.add("w-100");
    img.src = person.image;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    const h5Text = document.createTextNode(person.name);
    h5.appendChild(h5Text);

    const course = document.createElement("p");
    course.classList.add("card-text");
    const courseText = document.createTextNode(person.course);
    course.appendChild(courseText);

    const info = document.createElement("p");
    info.classList.add("card-text");
    const infoText = document.createTextNode(person.info);
    info.appendChild(infoText);

    cardBody.appendChild(h5);
    cardBody.appendChild(course);
    cardBody.appendChild(info);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);
    
    people.appendChild(col);
});