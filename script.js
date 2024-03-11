
function myFunction (){
    alert("Welcome to your new path to self discovery!")

    var answer1 = prompt("Are you ready for the trippy ride?")
    if (answer1 === "yes") {
       var answer2 = prompt ("Are you absolutely sure?")
       if(answer2 === "yes"){
        alert ("There's no going back!")
        alert ("Buckle up!")
       }
       else{
    alert("if you're not sure go home! ")
       }
    } else {alert("So Why waste my time?")}
    
    var answer3 = prompt("Are you absolutely sure?")
    if (answer3 === "yes") {
        alert ("there's no going back" )
        alert ("Buckle up!")
        confirm("FIVE")
        confirm ("FOUR")
        confirm ("THREE")
        confirm ("TWO")
        confirm ("ONE")
        alert ("WOMP WOMP WOMP - YOU LOSE")
        var answer4 = prompt ("Try again?")
        if (answer4 === "yes") {
            location.reload();
        }     else {
            alert ("Bye now")
        location.reload();}
        }
    
       alert ("See Ya!")
        
    
    
    
    
  }
