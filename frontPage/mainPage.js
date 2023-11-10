(function(){
    "use strict";
    //tilt the brochure/map
    const div = document.getElementById('tilt');

    document.addEventListener('mousemove', (event) => {
        const boxRect = div.getBoundingClientRect();
        const centerX = boxRect.left + boxRect.width / 2;
        const centerY = boxRect.top + boxRect.height / 2;
        
        const x = event.clientX - centerX;
        const y = event.clientY - centerY;
    
        const tiltAngle = 15; 
    
        div.style.transform = `rotate3d(${y}, ${-x}, 0, ${tiltAngle}deg)`;
    });
    //button functionality
    let btn2img = {"dest1":"d1", "dest2":"d2", "dest3":"d3", "dest4":"d4",};
    let btns = document.querySelectorAll("button");
    console.log(btns.length);

    for(let btn of btns){
        //console.log(btn.id)
        
        btn.addEventListener("mouseover", (event)=>{
            //builds a query based on the array translation (button 1 corresponds to image 1 and so on)
            let identifier = "img#"+btn2img[btn.id];
            let desImg = document.querySelector(identifier);
            //console.log("mouseover log: "+desImg);
            desImg.setAttribute("class","overlayAnimated")
            //console.log(desImg.class);
        });
        btn.addEventListener("mouseout", (event)=>{
            //builds a query based on the array translation (button 1 corresponds to image 1 and so on)
            let identifier = "img#"+btn2img[btn.id];
            let desImg = document.querySelector(identifier);
            //console.log("mouseout log: "+desImg);
            desImg.setAttribute("class","overlay")
            //console.log(desImg.class);
        });
    }


})();
