var colors={
    bug: "#94BC4A",
    dark:"#736C75",
    dragon:"#6A7BAF",
    electric:"#E5C531",
    fairy:"#E397D1",
    fighting:"#CB5F48 ",
    fire:"#EA7A3C ",
    flying:"#7DA6DE ",
    ghost:"#846AB6 ",
    grass:"#71C558 ",
    ground:"#CC9F4F ",
    ice:"#70CBD4 ",
    normal:"#AAB09F ",
    poison:"#B468B7 ",
    psychic:"#E5709B ",
    rock:"#B2A061 ",
    steel:"#89A1B0 ",
    water:"#539AE2 "
}

function getPokemon(){
    var inputID= checkID(document.getElementById("inputID").value);;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputID}`)
    .then(res=> res.json())
    .then((data) => {
        setPokemon(data);
        console.log(data);
   })
}

function checkID(ID){
    let maxID=150;//898
    return Math.abs(ID%maxID);
}

function setPokemon(data){

    let PokeImage= document.getElementById("PokeImage");
    PokeImage.src=data.sprites.front_default;

    let PokeName= document.getElementById("PokeName");
    PokeName.innerText=data.forms[0].name[0].toUpperCase() + data.forms[0].name.slice(1);

    let PokeID= document.getElementById("PokeID");
    PokeID.innerText="#"+data.id;

    let PokeType= document.getElementById("PokeType");
    PokeType.innerText="Type: " +data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.slice(1) ;

    document.documentElement.style.setProperty("--mainColor", colors[data.types[0].type.name]);

}



