//function takes in string "palette" and changes color theme according to string
function selectPalette(palette) {
//change css file used for palette-related styling
    if (palette === "dark"){
        document.getElementById('colorway').href='../CSS/dark.css';}
    //same function as above, accounts for different input
    else if (palette == 'light'){
        document.getElementById('colorway').href='../CSS/light.css';
    }
    //same function as above, accounts for different input
    else if (palette == 'coffee'){
        document.getElementById('colorway').href='../CSS/coffee.css';
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

//Ask Notification permission if permission is neither granted or denied
  if(Notification.permission === "granted"){
  // do nothing
  }
  else if(Notification.permission !== "denied"){
    Notification.requestPermission();
  };

//add submit event listener to form
  const form = document.getElementById("form");
  document.getElementById("form").addEventListener("submit", formSubmit);

//submit form function, thank user for their feedback
  function formSubmit(event) {
    if(Notification.permission === "granted"){alert("Form Submitted- your feedback is greatly appreciated!");};
  }

