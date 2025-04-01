
function changeTrafficLight(){
    if(document.getElementById("yellow").className === "light light-yellow"){
        document.getElementById("red").className="light light-red";
        document.getElementById("yellow").className="light off";
    }

    else if(document.getElementById("red").className === "light light-red"){
        document.getElementById("red").className= "light off";
        document.getElementById("green").className="light light-green";
    }
    
    else if(document.getElementById("green").className === "light light-green"){
        document.getElementById("green").className = "light off";
        document.getElementById("yellow").className = "light light-yellow";
    }

}