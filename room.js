var firebaseConfig = {
    apiKey: "AIzaSyBikn4ZVO2cEWJej6EJd1C60A0WF6049Z4",
    authDomain: "my-independent-app-4ef68.firebaseapp.com",
    databaseURL: "https://my-independent-app-4ef68-default-rtdb.firebaseio.com",
    projectId: "my-independent-app-4ef68",
    storageBucket: "my-independent-app-4ef68.appspot.com",
    messagingSenderId: "647431296881",
    appId: "1:647431296881:web:dbdd1e64512112202d08d0",
    measurementId: "G-QQC9MN9538"
  };

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("userName");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room name",room_name);
    window.location="page.html";
    }

function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     row="<div class='room_name', id="+Room_names+" onclick='reDirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
     document.getElementById("output").innerHTML+=row;


    
    });});}
getData();

function reDirectToRoomName(roomName){
    localStorage.setItem("room name",roomName);
    window.location="page.html";    
}