const publications = document.getElementById("publications");

publicationData.forEach(publication => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    const row = document.createElement("div");
    row.classList.add("row");
    
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("col-md-4");
    const img = document.createElement("img");
    img.src = publication.img;
    img.classList.add("d-block");
    img.classList.add("w-100");
    imgDiv.appendChild(img);
    
    const dataDiv = document.createElement("div");
    dataDiv.classList.add("col-md-8");
    const h5 = document.createElement("h5");
    const h5Text = document.createTextNode(publication.title);
    h5.appendChild(h5Text);
    
    const pPeople = document.createElement("p");
    var peopleText = "";
    publication.people.forEach(person => {
        peopleText += person;
        peopleText += ", ";
    })
    peopleText = peopleText.slice(0, peopleText.length - 2);
    const pPeopleText = document.createTextNode(peopleText);
    pPeople.appendChild(pPeopleText);

    const pPublication = document.createElement("p");
    var publicationText = publication.publisher + ", " + publication.year;
    const pPublicationText = document.createTextNode(publicationText);
    pPublication.appendChild(pPublicationText);

    const a = document.createElement("a");
    a.href = publication.link;
    const aText = document.createTextNode("Download");
    a.appendChild(aText);

    dataDiv.appendChild(h5);
    dataDiv.appendChild(pPeople);
    dataDiv.appendChild(pPublication);
    dataDiv.appendChild(a);
    
    row.appendChild(imgDiv);
    row.appendChild(dataDiv);
    container.appendChild(row);

    publications.appendChild(container);
});
