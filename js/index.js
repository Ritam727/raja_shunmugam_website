const carousel = document.getElementById("carouselInner");
const indicators = document.getElementById("carouselIndicators");
var counter = 0;

researchData.forEach(element => {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", "#carouselExampleCaptions");
    button.setAttribute("data-bs-slide-to", counter.toString());
    button.setAttribute("aria-label", "Slide" + counter.toString());
    if (counter == 0) {
        button.classList.add("active");
    }

    indicators.appendChild(button);

    const carousel_item = document.createElement("div")
    carousel_item.classList.add("carousel-item");
    if (counter == 0) {
        carousel_item.classList.add("active");
    }
    
    const img = document.createElement("img");
    img.src = element.img;
    img.classList.add("d-block");
    img.classList.add("w-100");

    carousel_item.appendChild(img);

    const text = document.createElement("div");
    text.classList.add("carousel-caption");
    text.classList.add("d-none");
    text.classList.add("d-md-block");

    const h5 = document.createElement("h5");
    const h5Text = document.createTextNode(element.header);
    h5.appendChild(h5Text);

    const p = document.createElement("p");
    const pText = document.createTextNode(element.text);
    p.appendChild(pText);

    text.appendChild(h5);
    text.appendChild(p);

    carousel_item.appendChild(text);
    
    carousel.appendChild(carousel_item);

    counter += 1;
});

const degree = document.getElementById("degreeInformation");

degreeData.forEach(element => {
    const li = document.createElement("li");
    const text = document.createTextNode(element);
    li.appendChild(text);

    degree.appendChild(li);
});

const personal = document.getElementById("personalInformation");

const addressHeader = document.createElement("h5");
const addressHeaderText = document.createTextNode("Address");
addressHeader.appendChild(addressHeaderText);

const address = document.createElement("p");
const addressText = document.createTextNode(personalData.Address);
address.appendChild(addressText);

personal.append(addressHeader);
personal.appendChild(address);

const emailHeader = document.createElement("h5");
const emailHeaderText = document.createTextNode("Email Address");
emailHeader.appendChild(emailHeaderText);

const emailAddressUl = document.createElement("ul");
personalData.Email.forEach(email => {
    const li = document.createElement("li");
    const text = document.createTextNode(email);
    li.appendChild(text);

    emailAddressUl.append(li);
});

personal.append(emailHeader);
personal.appendChild(emailAddressUl);

const phoneHeader = document.createElement("h5");
const phoneHeaderText = document.createTextNode("Phone");
phoneHeader.appendChild(phoneHeaderText)

const phoneUl = document.createElement("ul");
personalData.Phone.forEach(phone => {
    const li = document.createElement("li");
    const text = document.createTextNode(phone);
    li.appendChild(text);

    phoneUl.append(li);
});

personal.append(phoneHeader);
personal.appendChild(phoneUl);

const faxHeader = document.createElement("h5");
const faxHeaderText = document.createTextNode("Fax");
faxHeader.appendChild(faxHeaderText);

const faxUl = document.createElement("ul");
personalData.Fax.forEach(fax => {
    const li = document.createElement("li");
    const text = document.createTextNode(fax);
    li.appendChild(text);

    faxUl.append(li);
});

personal.append(faxHeader);
personal.appendChild(faxUl);

const interest = document.getElementById("researchInterests");

researchInterestData.forEach(element => {
    const li = document.createElement("li");
    const text = document.createTextNode(element);
    li.appendChild(text);

    interest.appendChild(li);
});

const honors = document.getElementById("honors");

honorsData.forEach(element => {
    const li = document.createElement("li");
    const text = document.createTextNode(element);
    li.appendChild(text);

    honors.appendChild(li);
});

const appointments = document.getElementById("appointments");

appointmentsData.forEach(element => {
    const li = document.createElement("li");
    const text = document.createTextNode(element);
    li.appendChild(text);

    appointments.appendChild(li);
});
