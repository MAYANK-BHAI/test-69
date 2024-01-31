var width= screen.width;
new_width= screen.width - 70;
new_height= screen.height - 300;

if( width<992) {
    document.getElementById("profile").width= new_width;
        document.getElementById("profile").height= new_height;
    document.body.style.overflow = "hidden";
 }
 