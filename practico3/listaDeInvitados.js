let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];
for (let i = 0; i < personas.length; i++) { 
    if (i !== "Sofia" && i !== "Jose"){
       admitidos += personas[i] + " ,"; 

    }
    console.log(admitidos)
}


