function createTag(content, idName, tagName) {
  const element = document.createElement(tagName);
  element.setAttribute("id", idName);
  element.innerHTML = content;
  return element;
}

function createImage(src) {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  return img;
}

function toggle() {
          switch (this.innerHTML) {
            case "Aliases":
              const test = document.querySelectorAll("#Aliases");

              test.forEach(element => {
                const testen = window.getComputedStyle(element).display;
                if (testen === "none") {
                  element.style.display = "block";
                } else {
                  element.style.display = "none";
                }
              });

              break;
            case "AlterEgo":
              const alter = document.querySelectorAll("#alterEgos");

              alter.forEach(element => {
                const testen = window.getComputedStyle(element).display;
                if (testen === "none") {
                  element.style.display = "block";
                } else {
                  element.style.display = "none";
                }
              });
              break;

              case "First Appearance":
              
              const appearance = document.getElementById('firstappearance');
              const Style = window.getComputedStyle(appearance).display 
               
              if(Style == 'block') {
                appearance.style.display = "none";
              }
              else {
                appearance.style.display = "block";
              }

                break;

                case "Relatives":
                    const rel = document.querySelectorAll('#Relatives');
                     rel.forEach(element => {
                      const testen = window.getComputedStyle(element).display;
                      if (testen === "none") {
                        element.style.display = "block";
                      } else {
                        element.style.display = "none";
                      }
                     })
                  break;

                  case "Group Affiliation":
                    const afill = document.getElementById('affiliation');
                      const testen1 = window.getComputedStyle(afill).display;
                      if (testen1 === "none") {
                        afill.style.display = "block";
                      } else {
                        afill.style.display = "none";
                      }
                    break;

              default:
                const bla = document.getElementById(this.innerHTML.toLowerCase())
                const test2 = window.getComputedStyle(bla).display;
                
                if(test2 == "block"){

                bla.style.display = 'none';
                }
                else {
                  bla.style.display = 'block';
                }
              break;
          }
        };

function createWrapper(idName, tagName) {
  const element = document.createElement(tagName);
  element.setAttribute("id", idName);
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
      const mainWrapper = createWrapper("main-wrapper", "div");
      const wrapper = createWrapper("wrapper", "div");
      const wrapper1 = createWrapper("wrapper1", "div");
      const appearance = createWrapper("appearance", "div");
      const biography = createWrapper("biography", "div");
      const connections = createWrapper("connections", "div");
      const powerstats = createWrapper("powerstats", "div");
      const work = createWrapper("work", "div");
      const images = createWrapper("image", "div");
      wrapper.appendChild(createTag(result.name, "heroName", "h1"));

      //appearance Generate
      appearance.appendChild(createTag("Eyecolor", "collapsible", "h2"));
      appearance.appendChild(
        createTag(result.appearance.eyeColor, "eyecolor", "div")
      );
      appearance.appendChild(createTag("Gender", "collapsible", "h2"));
      appearance.appendChild(
        createTag(result.appearance.gender, "gender", "div")
      );
      appearance.appendChild(createTag("HairColor", "collapsible", "h2"));
      appearance.appendChild(
        createTag(result.appearance.hairColor, "haircolor", "div")
      );
      appearance.appendChild(createTag("Race", "collapsible", "h2"));
      appearance.appendChild(createTag(result.appearance.race, "race", "div"));
      appearance.appendChild(createTag("Height", "collapsible", "h2"));
      appearance.appendChild(
        createTag(
          "Height: " +
            result.appearance.height[0] +
            "ft " +
            result.appearance.height[1],
          "height",
          "div"
        )
      );
      appearance.appendChild(createTag("Weight", "collapsible", "h2"));
      appearance.appendChild(
        createTag(
          "Weight: " +
            result.appearance.weight[0] +
            "lbs " +
            result.appearance.weight[1],
          "weight",
          "div"
        )
      );
      wrapper1.appendChild(appearance);

      // imgage generate

      images.appendChild(createImage(result.images.lg));
      wrapper.appendChild(images);
      //biography Generate
      biography.appendChild(createTag("Aliases", "collapsible", "h2"));
      result.biography.aliases.forEach(element => {
        const spans = document.createElement("span");
        const aliases = createWrapper("Aliases", "div");
        spans.innerHTML = element;
        aliases.appendChild(spans);
        biography.appendChild(aliases);
      });
      biography.appendChild(createTag("Aligment", "collapsible", "h2"));
      biography.appendChild(
        createTag("Aligment: " + result.biography.alignment, "aligment", "div")
      );
      biography.appendChild(createTag("AlterEgo", "collapsible", "h2"));
      biography.appendChild(
        createTag("AlterEgo: " + result.biography.alterEgos, "alterEgos", "div")
      );
      biography.appendChild(createTag("First Appearance", "collapsible", "h2"));
      biography.appendChild(
        createTag(
          "FirstAppearance: " + result.biography.firstAppearance,
          "firstappearance",
          "div"
        )
      );
      biography.appendChild(createTag("FullName", "collapsible", "h2"));
      biography.appendChild(
        createTag("FullName" + result.biography.fullName, "fullname", "div")
      );
      biography.appendChild(createTag("PlaceofBirth", "collapsible", "h2"));
      biography.appendChild(
        createTag(
          "PlaceOfBirth: " + result.biography.placeOfBirth,
          "placeofbirth",
          "div"
        )
      );
      biography.appendChild(createTag("Publisher", "collapsible", "h2"));
      biography.appendChild(
        createTag(
          "Publisher: " + result.biography.publisher,
          "publisher",
          "div"
        )
      );
      wrapper1.appendChild(biography);

      //connections gerete
      connections.appendChild(
        createTag("Group Affiliation", "collapsible", "h2")
      );
      connections.appendChild(
        createTag(result.connections.groupAffiliation, "affiliation", "div")
      );
      const splitted = result.connections.relatives.split(",");
      connections.appendChild(createTag("Relatives", "collapsible", "h2"));
      splitted.forEach(element => {
        connections.appendChild(createTag(element, "Relatives", "div"));
      });
      wrapper1.appendChild(connections);

      //Powerstats ganerate
      powerstats.appendChild(createTag("Combat", "collapsible", "h2"));
      powerstats.appendChild(
        createTag(result.powerstats.combat, "combat", "div")
      );
      powerstats.appendChild(createTag("Durablitity", "collapsible", "h2"));
      powerstats.appendChild(
        createTag(result.powerstats.durability, "durablitity", "div")
      );
      powerstats.appendChild(createTag("Intelligence", "collapsible", "h2"));
      powerstats.appendChild(
        createTag(result.powerstats.intelligence, "intelligence", "div")
      );
      powerstats.appendChild(createTag("Power", "collapsible", "h2"));
      powerstats.appendChild(
        createTag(result.powerstats.power, "power", "div")
      );
      powerstats.appendChild(createTag("Speed", "collapsible", "h2"));
      powerstats.appendChild(
        createTag(result.powerstats.speed, "speed", "div")
      );
      powerstats.appendChild(createTag("Strenght", "collapsible", "h2"));
      powerstats.appendChild(
        createTag(result.powerstats.strength, "strenght", "div")
      );
      wrapper1.appendChild(powerstats);

      //Work ganerate
      work.appendChild(createTag("Base", "collapsible", "h2"));
      work.appendChild(createTag(result.work.base, "base", "div"));
      work.appendChild(createTag("Occupation", "collapsible", "h2"));
      work.appendChild(createTag(result.work.occupation, "occupation", "div"));
      wrapper1.appendChild(work);

      mainWrapper.appendChild(wrapper1);
      document.getElementById("target").appendChild(wrapper);
      document.getElementById("target").appendChild(mainWrapper);
      const toggel = document.querySelectorAll("#collapsible");

      toggel.forEach(element => {
        element.addEventListener("click",toggle)
      });
    });
}

document.getElementById("test").addEventListener("submit", function(e) {
  getHero();
  e.preventDefault();
});

document.getElementById("input").addEventListener("input", function() {
  if (this.value.length <= 0) {
    document.getElementById("target").innerHTML = "";
  }
});
