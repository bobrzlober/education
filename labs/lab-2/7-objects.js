const fn = () => {
 const constObject = {name: "Артем"};  
 let varObject = {name: "Артем"};

 constObject.name = "Брагар";
 varObject.name = "Брагар";

 varObject = {name: "Артем Брагар"};
} 
fn();