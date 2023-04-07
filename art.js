//function takes in string "palette" and changes color theme according to string
function selectPalette(palette) {
    if (palette === "dark"){

        document.getElementById('colorway').href='/dark.css';//change css file used for palette-related styling
        document.getElementById('twitter').src='/images/smLinks/twitDark.png';//replace twitter link according to theme
        document.getElementById('instagram').src='/images/smLinks/instaDark.png';//replace insta link according to theme
        document.getElementById('email').src='/images/smLinks/mailDark.png';//replace mail link according to theme
    }
    //same function as above, accounts for different input
    else if (palette == 'light'){
        document.getElementById('colorway').href='/light.css';
        document.getElementById('twitter').src='/images/smLinks/twitLight.png';
        document.getElementById('instagram').src='/images/smLinks/instaLight.png';
        document.getElementById('email').src='/images/smLinks/mailLight.png';
    }
    //same function as above, accounts for different input
    else if (palette == 'coffee'){
        document.getElementById('colorway').href='/coffee.css';
        document.getElementById('twitter').src='/images/smLinks/twitCoffee.png';
        document.getElementById('instagram').src='/images/smLinks/instaCoffee.png';
        document.getElementById('email').src='/images/smLinks/mailCoffee.png';
    }
}


//fetch JSON file, get data
fetch('user.json').then(function (response) {
    return response.json();
}).then(function (obj) { //turn data into a javascript object
    selectPalette(obj.Colorway); //select default palette based on the data in user.json
    changeArt(null);
})

//add event listeners for palette changers
document.getElementById("light").addEventListener('click', () => {selectPalette('light');});
document.getElementById("dark").addEventListener('click', () => {selectPalette('dark');});
document.getElementById("coffee").addEventListener('click', () => {selectPalette('coffee');});

//establish variables required for changeArt function
const artPieces = ["/images/artGallery/art1.jpeg" , "/images/artGallery/art2.jpeg" , "/images/artGallery/art3.jpeg"];
const artDescs = ["Ruttnandemannen, ink and acrylic on paper", "Sunspots, ink and acrylic on paper", "The Jester, ink on paper"]
let count = 0;

//takes in a string "direction" and changes the main image based on the input
function changeArt(direction){

//change count positively, make it loop through values 0 to 2
    if(direction == "forward"){
        if(count >= 2){count = 0;}
        else{count++;}
    }
//change count negatively, make it loop through values 0 to 2
    else if(direction == "backward"){
        if(count <= 0){count = 2;}
        else{count--;}
    }

//build website (images, alt text) based on what main image AKA count is
    if(count==0){
    document.getElementById("sideArtL").src=artPieces[2];
    document.getElementById("sideArtR").src=artPieces[1];
    document.getElementById("sideArtL").alt=artDescs[2];
    document.getElementById("sideArtR").alt=artDescs[1];
    }
    else if(count==1){
    document.getElementById("sideArtL").src=artPieces[0];
    document.getElementById("sideArtR").src=artPieces[2];
    document.getElementById("sideArtL").alt=artDescs[0];
    document.getElementById("sideArtR").alt=artDescs[2];
    }
    else{
    document.getElementById("sideArtL").src=artPieces[1];
    document.getElementById("sideArtR").src=artPieces[0];
    document.getElementById("sideArtL").alt=artDescs[1];
    document.getElementById("sideArtR").alt=artDescs[0];
    }
    document.getElementById("mainArt").src=artPieces[count];
    document.getElementById("mainArt").alt=artDescs[count];
}

//event listeners for changeArt function, forward and backward respectively
document.getElementById("artArrowForw").addEventListener('click', () => {changeArt('forward');});
document.getElementById("artArrowBack").addEventListener('click', () => {changeArt('backward');});

//copy email event listener + function
document.getElementById("copyMail").addEventListener('click', () => {navigator.clipboard.writeText("astercurry317@gmail.com").then(alert("Copied Email Address."));});