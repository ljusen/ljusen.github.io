//function takes in string "palette" and changes color theme according to string
function selectPalette(palette) {
    if (palette === "dark"){

        document.getElementById('colorway').href='../CSS/dark.css';//change css file used for palette-related styling
        document.getElementById('twitter').src='/images/smLinks/twitDark.png';//replace twitter link according to theme
        document.getElementById('instagram').src='/images/smLinks/instaDark.png';//replace insta link according to theme
        document.getElementById('email').src='/images/smLinks/mailDark.png';//replace mail link according to theme
    }
    //same function as above, accounts for different input
    else if (palette == 'light'){
        document.getElementById('colorway').href='../CSS/light.css';
        document.getElementById('twitter').src='/images/smLinks/twitLight.png';
        document.getElementById('instagram').src='/images/smLinks/instaLight.png';
        document.getElementById('email').src='/images/smLinks/mailLight.png';
    }
    //same function as above, accounts for different input
    else if (palette == 'coffee'){
        document.getElementById('colorway').href='../CSS/coffee.css';
        document.getElementById('twitter').src='/images/smLinks/twitCoffee.png';
        document.getElementById('instagram').src='/images/smLinks/instaCoffee.png';
        document.getElementById('email').src='/images/smLinks/mailCoffee.png';
    }
}


//fetch JSON file, get data
fetch('../user.json').then(function (response) {
    return response.json();
}).then(function (obj) { //turn data into a javascript object
    selectPalette(obj.Colorway); //select default palette based on the data in user.json
})

//add event listeners for palette changers
document.getElementById("light").addEventListener('click', () => {selectPalette('light');});
document.getElementById("dark").addEventListener('click', () => {selectPalette('dark');});
document.getElementById("coffee").addEventListener('click', () => {selectPalette('coffee');});

//copy email link event listener + function
document.getElementById("copyMail").addEventListener('click', () => {navigator.clipboard.writeText("astercurry317@gmail.com").then(alert("Copied Email Address."));});
