
document.getElementById('test').addEventListener('submit', function(e) {
  getHero()
  e.preventDefault();
})

document.getElementById("input").addEventListener("input", function() {
  if (this.value.length <= 0) {
    document.getElementById("target").innerHTML = "";
  }
});

function createTag(content , idName , tagName) {
  const element = document.createElement(tagName);
  element.setAttribute('id', idName)
  element.innerHTML = content;
  return element;
}

function createWrapper(idName , tagName) {
  const element = document.createElement(tagName)
  element.setAttribute('id', idName);
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
      const mainWrapper = createWrapper('main-wrapper','div');
      const wrapper = createWrapper('wrapper','div');
      const wrapper1 = createWrapper('wrapper1', 'div');
      const appearance = createWrapper('appearance',  'div');
      const biography = createWrapper('biography' , 'div');
      const connections = createWrapper('connections', 'div');
      const powerstats = createWrapper('powerstats' , 'div');
      const work = createWrapper('work', 'div');
      wrapper.appendChild(createTag(result.name,"heroName",'h1'));
      
      //appearance Generate
      appearance.appendChild(createTag("Eyecolor", '', 'h2'));   
      appearance.appendChild(createTag(result.appearance.eyeColor , "eyeColor" ,"div"));
      appearance.appendChild(createTag("Gender", '', 'h2'));
      appearance.appendChild(createTag(result.appearance.gender , "gender" ,"div"));
      appearance.appendChild(createTag("Hair Color", '', 'h2'));
      appearance.appendChild(createTag(result.appearance.hairColor , "hairColor" ,"div"));
      appearance.appendChild(createTag("Race", '', 'h2'));
      appearance.appendChild(createTag(result.appearance.race , "race" ,"div"));
      appearance.appendChild(createTag("Height", '', 'h2'));
      appearance.appendChild(createTag("Height: " + result.appearance.height[0] + "ft " + result.appearance.height[1], 'hairColor', 'div'))
      appearance.appendChild(createTag("Weight", '', 'h2'));
      appearance.appendChild(createTag("Weight: " + result.appearance.weight[0] + "lbs " + result.appearance.weight[1], "weight", 'div'));
      wrapper1.appendChild(appearance)

      //biography Generate
      biography.appendChild(createTag("Aliases", '', 'h2'));   
      result.biography.aliases.forEach(element => {
        const spans = document.createElement("span");
        const aliases = createWrapper('aliases','div');
        spans.innerHTML = element;
        aliases.appendChild(spans);
        biography.appendChild(aliases);
      });
      biography.appendChild(createTag("Aligment", '', 'h2'));   
      biography.appendChild(createTag("Aligment: " + result.biography.alignment,'alignment','div'));
      biography.appendChild(createTag("AlterEgo", '', 'h2'));   
      biography.appendChild(createTag("AlterEgo: " + result.biography.alterEgos, 'alterEgos', 'div'));
      biography.appendChild(createTag("First Appearance", '', 'h2'));   
      biography.appendChild(createTag("FirstAppearance: " + result.biography.firstAppearance,"firstAppearance","div"))   
      biography.appendChild(createTag("FullName", '', 'h2'));   
      biography.appendChild(createTag("FullName" + result.biography.fullName, 'fullName', 'div'));
      biography.appendChild(createTag("Place of Birth", '', 'h2'));   
      biography.appendChild(createTag("PlaceOfBirth: " + result.biography.placeOfBirth, 'placeOfBirth', 'div'));
      biography.appendChild(createTag("Publisher", '', 'h2'));   
      biography.appendChild(createTag("Publisher: " + result.biography.publisher , 'publisher', 'div'));
      wrapper1.appendChild(biography)
      
      //connections gerete
      connections.appendChild(createTag('Group affiliation','','h2')) 
      connections.appendChild(createTag(result.connections.groupAffiliation, 'affiliation','div'))
      const splitted = result.connections.relatives.split(',');
      connections.appendChild(createTag('Relatives','','h2'));
      splitted.forEach(element => {
        connections.appendChild(createTag(element, 'affiliation','div')) 
      });
      wrapper1.appendChild(connections);
      
      //Powerstats ganerate
      powerstats.appendChild(createTag('Combat','','h2'))
      powerstats.appendChild(createTag(result.powerstats.combat ,'combat','div'));
      powerstats.appendChild(createTag('Durablitity','','h2'))
      powerstats.appendChild(createTag(result.powerstats.durability,'durablility','div'));
      powerstats.appendChild(createTag('Intelligence','','h2'))
      powerstats.appendChild(createTag(result.powerstats.intelligence ,'intelligence','div'));
      powerstats.appendChild(createTag('Power','','h2'))
      powerstats.appendChild(createTag(result.powerstats.power ,'power','div'));
      powerstats.appendChild(createTag('Speed','','h2'))
      powerstats.appendChild(createTag(result.powerstats.speed ,'speed','div'));
      powerstats.appendChild(createTag('Strength','','h2'))
      powerstats.appendChild(createTag( result.powerstats.strength ,'strenght','div'));
      wrapper1.appendChild(powerstats);
      
      //Work ganerate
      work.appendChild(createTag('Base', '' , 'h2'))
      work.appendChild(createTag(result.work.base ,'base','div'));
      work.appendChild(createTag('Occupation', '' , 'h2'))
      work.appendChild(createTag(result.work.occupation ,'occupation', 'div'));
      wrapper1.appendChild(work);
      

      
      mainWrapper.appendChild(wrapper1);
      document.getElementById('target').appendChild(wrapper)
      document.getElementById('target').appendChild(mainWrapper);
      
    });
}