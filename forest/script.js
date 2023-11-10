var ison = true;
const flashlight = document.getElementById('flashlight');
const newtextArray = [
    `According to TrillMAG: "While it likely wasn't the first horror story hosted on the internet, the widely accepted origin of "Creepypasta" traces back to a 2001 blog belonging to one "Ted the Caver." The blog was comprised of a series of posts by Ted, who explained an odd phenomenon in a nearby cave that he explored with his friends. Each post gave an update, hinting to a new spooky red flag, until the blog stopped updating, indicating that Ted had mysteriously disappeared in the cave."`,
    `Like the folklore that came before, Creepypasta is the modern generations way of expressing dark stories by way of mouth, or rather, way of key. With some of the more popular creepy stories being passed around via email chains, message boards, and social media it speaks to our nature as storytellers that the tradition has evolved along side us. And while some folklore experts would argue that Creepypasta is not folklore due to technology documenting when stories came into the cultural zeitgeist, we can still feel the effects of these stories, and I would argue that because of the ease of access of the internet, adds to the memetic quality that all folklore shares.`,
    `Sadly, the lines between reality and fiction can become muddled, as with the story of the Slender Man Stabbing. This tragic controversy also sparked a decline in mainstream appeal for Creepypasta storytelling, but there are still places such as the fictional SCP foundation or r/nosleep.`,
    `Happy Halloween! Thank you for reading!`
];
let newtextCount = 0;


function changeText(){
    if (newtextCount < newtextArray.length)
    {
        let newelement = document.createElement("p");
        let newtext = document.createTextNode(newtextArray[newtextCount]);
        newelement.appendChild(newtext);
        document.getElementById("change").appendChild(newelement);
        newtextCount++;
    }
}

function onFlashlight(e) {
    e.preventDefault();
    if (ison) {
        flashlight.style.setProperty("background-color", "rgba(0,0,0,1)");
        flashlight.style.setProperty("outline-color", "rgba(0,0,0,1)");
        ison = false;
        changeText();
    }
    else {
        flashlight.style.setProperty("background-color", "rgba(0,0,0,0)");
        flashlight.style.setProperty("outline-color", "rgba(0,0,0,0.93)");
        ison = true;
    }
}

function onMouseMove(e) {
    var flashlight = document.getElementById('flashlight');
    let movex = e.clientX;
    let movey = e.clientY;
    var adjustx = flashlight.clientWidth / 2;
    var adjusty = flashlight.clientHeight / 2;

    flashlight.style.left = movex - adjustx;
    flashlight.style.top = movey - adjusty;
}

document.getElementsByTagName("body")[0].addEventListener("contextmenu", onFlashlight);