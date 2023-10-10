console.log('Hello, World!');

document.getElementById("prev").style.background= "4a4a4a"

const prev = document.getElementById("prev");
const next = document.getElementById("next");
//const APODs = document.getElementsByClassName("APOD");
//console.log(APODs);
let index = 0;

function APOD_obj(source, date, image, title) {
    this.source = source,
    this.date = date,
    this.image = image,
    this.title = title
}
const APOD_oct3 = new APOD_obj("Image Credit & Copyright: NASA, ESA, Hubble, HLA; Processing & Copyright: Harshwardhan Pathak", "03-10-2023", "images/Hourglass_HubblePathak_1080.jpg", "MyCn 18: The Engraved Hourglass Planetary Nebula")
const APOD_oct4 = new APOD_obj("Image Credit & Copyright: Abdullah Alharbi", "04-10-2023", "images/WitchHead_Alharbi_1080.jpg", "The Witch Head Nebula")
const APOD_oct5 = new APOD_obj("Image Credit & Copyright: Tunc Tezel (TWAN)", "05-10-2023", "images/MoValleyEclipse1024.jpg", "Ring of Fire over Monument Valley")

const APOD_array = [APOD_oct3, APOD_oct4, APOD_oct5];
console.log(APOD_array);

function createAPOD() {
    const APOD = document.createElement("div");
    APOD.className = "APOD";
    APOD.innerHTML = "<figure>"
    + "<img src='" + APOD_array[index].image + "'>"
    + "<p>" + APOD_obj.source + "</p>"
    + "</figure>"
    + "<div><p>" + APOD_array[index].date + "</p>"
    + "<h2>" + APOD_array[index].title + "</h2>";
    document.getElementById("APOD__group").innerHTML = "";
    document.getElementById("APOD__group").appendChild(APOD);
}

createAPOD();

prev.innerHTML = "&larr; go back";

prev.addEventListener("click", goback);
next.addEventListener("click", goforward);

function goback() {
    console.log("go back");
    //APODs[index].style.display = "none";
    index++;
    //APODs[index].style.display = "grid";
    updateControls();
    createAPOD();
}
function goforward() {
    console.log("go forward");
    //APODs[index].style.display = "none";
    index--;
    //APODs[index].style.display = "grid";
    updateControls();
    createAPOD();
}

function updateControls() {
    if (index == 0) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    }
    if (index == APOD_array.length - 1) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }
}