function createTag(content, idName, tagName) {
  const element = document.createElement(tagName);
  element.setAttribute("id", idName);
  element.innerText = content;
  return element;
};

function createImage(src) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  return img;
};

function toggle() {
  let style;
          switch (this.innerHTML) {
            case "Aliases":
              let alias = document.querySelectorAll("#Aliases");

              alias.forEach(element => {
                style = window.getComputedStyle(element).display;
                if (style === "none") {
                  element.style.display = "block";
                } else {
                  element.style.display = "none";
                }
              });

              break;
            case "AlterEgo":
              const alter = document.querySelectorAll("#alterEgos");

              alter.forEach(element => {
                style = window.getComputedStyle(element).display;
                if (style === "none") {
                  element.style.display = "block";
                } else {
                  element.style.display = "none";
                }
              });
              break;

              case "First Appearance":
              
              const appearance = document.getElementById('firstappearance');
                style = window.getComputedStyle(appearance).display;
                if (style === "none") {
                  appearance.style.display = "block";
                } else {
                  appearance.style.display = "none";
                }

                break;

                case "Relatives":
                    const rel = document.querySelectorAll('#Relatives');
                     rel.forEach(element => {
                      style = window.getComputedStyle(element).display;
                      if (style === "none") {
                        element.style.display = "block";
                      } else {
                        element.style.display = "none";
                      }
                     })
                  break;

                  case "Group Affiliation":
                    const afill = document.getElementById('affiliation');
                    style = window.getComputedStyle(afill).display;
                    if (style === "none") {
                      afill.style.display = "block";
                    } else {
                      afill.style.display = "none";
                    }
                    break;

              default:
                const allOthers = document.getElementById(this.innerHTML.toLowerCase())
                style = window.getComputedStyle(allOthers).display;
                if (style === "none") {
                  allOthers.style.display = "block";
                } else {
                  allOthers.style.display = "none";
                }
              break;
          }
};

function createWrapper(idName, tagName) {
  const element = document.createElement(tagName);
  element.setAttribute("id", idName);
  return element;
};

function createAppererance(result) {

  const appearance = createWrapper("appearance", "div");
  appearance.appendChild(createTag("Eyecolor", "collapsible", "h2"));
  appearance.appendChild(
    createTag(result.eyeColor, "eyecolor", "div")
  );
  appearance.appendChild(createTag("Gender", "collapsible", "h2"));
  appearance.appendChild(
    createTag(result.gender, "gender", "div")
  );
  appearance.appendChild(createTag("HairColor", "collapsible", "h2"));
  appearance.appendChild(
    createTag(result.hairColor, "haircolor", "div")
  );
  appearance.appendChild(createTag("Race", "collapsible", "h2"));
  appearance.appendChild(createTag(result.race, "race", "div"));
  appearance.appendChild(createTag("Height", "collapsible", "h2"));
  appearance.appendChild(
    createTag(
      "Height: " +
        result.height[0] +
        "ft " +
        result.height[1],
      "height",
      "div"
    )
  );
  appearance.appendChild(createTag("Weight", "collapsible", "h2"));
      appearance.appendChild(
        createTag(
          "Weight: " +
            result.weight[0] +
            "lbs " +
            result.weight[1],
          "weight",
          "div"
        )
      );
  return appearance;
};

function createBiograpphy(result) {
  const biography = createWrapper("biography", "div");

  biography.appendChild(createTag("Aliases", "collapsible", "h2"));
  result.aliases.forEach(element => {
    const spans = document.createElement("span");
    const aliases = createWrapper("Aliases", "div");
    spans.innerHTML = element;
    aliases.appendChild(spans);
    biography.appendChild(aliases);
  });
  biography.appendChild(createTag("Aligment", "collapsible", "h2"));
  biography.appendChild(
    createTag("Aligment: " + result.alignment, "aligment", "div")
  );
  biography.appendChild(createTag("AlterEgo", "collapsible", "h2"));
  biography.appendChild(
    createTag("AlterEgo: " + result.alterEgos, "alterEgos", "div")
  );
  biography.appendChild(createTag("First Appearance", "collapsible", "h2"));
  biography.appendChild(
    createTag(
      "FirstAppearance: " + result.firstAppearance,
      "firstappearance",
      "div"
    )
  );
  biography.appendChild(createTag("FullName", "collapsible", "h2"));
  biography.appendChild(
    createTag("FullName" + result.fullName, "fullname", "div")
  );
  biography.appendChild(createTag("PlaceofBirth", "collapsible", "h2"));
  biography.appendChild(
    createTag(
      "PlaceOfBirth: " + result.placeOfBirth,
      "placeofbirth",
      "div"
    )
  );
  biography.appendChild(createTag("Publisher", "collapsible", "h2"));
  biography.appendChild(
    createTag(
      "Publisher: " + result.publisher,
      "publisher",
      "div"
    )
  );
  return biography;
};

function createContact(result) {
  const connections = createWrapper("connections", "div");

  connections.appendChild(
    createTag("Group Affiliation", "collapsible", "h2")
  );
  connections.appendChild(
    createTag(result.groupAffiliation, "affiliation", "div")
  );
  const splitted = result.relatives.split(",");
  connections.appendChild(createTag("Relatives", "collapsible", "h2"));
  splitted.forEach(element => {
    connections.appendChild(createTag(element, "Relatives", "div"));
  });

  return connections;
};

function createPowerStat(result) {
  const powerstats = createWrapper("powerstats", "div");

  
   powerstats.appendChild(createTag("Combat", "collapsible", "h2"));
   powerstats.appendChild(
     createTag(result.combat, "combat", "div")
   );
   powerstats.appendChild(createTag("Durablitity", "collapsible", "h2"));
   powerstats.appendChild(
     createTag(result.durability, "durablitity", "div")
   );
   powerstats.appendChild(createTag("Intelligence", "collapsible", "h2"));
   powerstats.appendChild(
     createTag(result.intelligence, "intelligence", "div")
   );
   powerstats.appendChild(createTag("Power", "collapsible", "h2"));
   powerstats.appendChild(
     createTag(result.power, "power", "div")
   );
   powerstats.appendChild(createTag("Speed", "collapsible", "h2"));
   powerstats.appendChild(
     createTag(result.speed, "speed", "div")
   );
   powerstats.appendChild(createTag("Strenght", "collapsible", "h2"));
   powerstats.appendChild(
     createTag(result.strength, "strenght", "div")
   );
   return powerstats;
};

function createWork(result) {
        const work = createWrapper("work", "div");

  work.appendChild(createTag("Base", "collapsible", "h2"));
      work.appendChild(createTag(result.base, "base", "div"));
      work.appendChild(createTag("Occupation", "collapsible", "h2"));
      work.appendChild(createTag(result.occupation, "occupation", "div"));
      return work;
};

function resetTarget(result) {
  result.innerHTML = "";
  return result;
};

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
      resetTarget(document.getElementById('target'));
      const wrapper = createWrapper("wrapper", "div");
      const wrapper1 = createWrapper("wrapper1", "div");
      const images = createWrapper("image", "div");
      wrapper.appendChild(createTag(result.name, "heroName", "h1"));

      //appearance Generat  
      wrapper1.appendChild(createAppererance(result.appearance));
      // imgage generate no refractering needed way to little code
      images.appendChild(createImage(result.images.lg));
      wrapper.appendChild(images);
      //biography Generate
     
      wrapper1.appendChild(createBiograpphy(result.biography));

      //connections gerete
      wrapper1.appendChild(createContact(result.connections));


     //Powerstats ganerate
      wrapper1.appendChild(createPowerStat(result.powerstats));

      //Work ganerate
      
      wrapper1.appendChild(createWork(result.work));

      document.getElementById("target").appendChild(wrapper);
      document.getElementById("target").appendChild(wrapper1);
      const toggel = document.querySelectorAll("#collapsible");

      toggel.forEach(element => {
        element.addEventListener("click",toggle)
      });
    }).catch(err => {
      alert('please give a vallid awnser')
    });
};

document.getElementById("test").addEventListener("submit", function(e) {
  getHero();
  e.preventDefault();
});

document.getElementById("input").addEventListener("input", function() {
  if (this.value.length <= 0) {
    document.getElementById("target").innerHTML = "";
  }
});
