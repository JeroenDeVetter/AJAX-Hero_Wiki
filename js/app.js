const template = document.getElementById("heros-info");

document.getElementById('test').addEventListener('submit', function(e) {
  getHero()
  e.preventDefault();
})

document.getElementById("input").addEventListener("input", function() {
  if (this.value.length <= 0) {
    document.getElementById("target").innerHTML = "";
  }
});

function createTag(content , className , tagName) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.innerHTML = content;
  return element;
}

async function getHero() {
  const input = document.getElementById("input").value;
  await fetch(`https://superhero-search.p.rapidapi.com/?hero=` + input, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "a3c4fa1507mshf6bf0e684668c9bp13089cjsne1a25d5a53fd"
    }
  })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      const tempNode = template.content.cloneNode(true);

      tempNode.getElementById('wrapper').appendChild(createTag(result.name,"heroName",'h1'));
      tempNode.getElementById("gender").innerHTML;

      tempNode.getElementById("eyeColor").innerHTML =
        "eyeColor: " + result.appearance.eyeColor;
      tempNode.getElementById("hairColor").innerHTML =
        "hairColor: " + result.appearance.hairColor;
      tempNode.getElementById("race").innerHTML =
        "Rase: " + result.appearance.race;
      tempNode.getElementById("height").innerHTML =
        "Height: " +
        result.appearance.height[0] +
        "ft " +
        result.appearance.height[1];
      tempNode.getElementById("weight").innerHTML =
        "Weight: " +
        result.appearance.weight[0] +
        "lbs " +
        result.appearance.weight[1];
      result.biography.aliases.forEach(element => {
        const spans = document.createElement("span");
        spans.innerHTML = element;
        tempNode.getElementById("aliases").appendChild(spans);
      });
      tempNode.getElementById("alignment").innerHTML =
        "Aligment: " + result.biography.alignment;
      tempNode.getElementById("alterEgos").innerHTML =
      "AlterEgo: " +  
      result.biography.alterEgos;
      tempNode.getElementById("firstAppearance").innerHTML =
      "FirstAppearance: " +  
      result.biography.firstAppearance;
      tempNode.getElementById("fullName").innerHTML =
      "FullName" +
      result.biography.fullName;
      tempNode.getElementById("placeOfBirth").innerHTML =
      "Place Of Birth: " +  
      result.biography.placeOfBirth;
      tempNode.getElementById("publisher").innerHTML =
      "Publisher: " + 
      result.biography.publisher;
      tempNode.getElementById("affiliation").innerHTML =
      "Group Affiliation: " + 
      result.connections.groupAffiliation;
 
      const test = result.connections.relatives.split(',');
      test.forEach(element => {
        const test = document.createElement('span')
        test.innerText = element;
        tempNode.getElementById("relatives").appendChild(test)
      });
      tempNode.getElementById("combat").innerHTML = "Combat: " + result.powerstats.combat;
      tempNode.getElementById("durablility").innerHTML =
      "Durability: " +   
      result.powerstats.durability;
      tempNode.getElementById("intelligence").innerHTML =
      "Intelligence: " +  
      result.powerstats.intelligence;
      tempNode.getElementById("power").innerHTML = "Power: " + result.powerstats.power;
      tempNode.getElementById("speed").innerHTML = "Speed: " + result.powerstats.speed;
      tempNode.getElementById("strenght").innerHTML =
        "Stranght: "  + result.powerstats.strength;
      tempNode.getElementById("base").innerHTML = "Base: " + result.work.base;
      tempNode.getElementById("occupation").innerHTML = "Occupation: " + result.work.occupation;

      document.getElementById("target").appendChild(tempNode);
    });
}