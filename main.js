const ul = document.querySelectorAll("strong");
const h2 = document.querySelector("bold");
const p = document.querySelector("p");
const article = document.querySelectorAll("article");
const inputs = document.querySelector("input");
const today = document.querySelector(".today");
const tommorrow = document.querySelector(".tommorrow");
const day = document.querySelector(".day");
const main = document.querySelector("main")
const select = document.querySelector(".select")
const del = document.querySelector(".del")

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`https://wttr.in/${event.target.location.value}?format=j1`)
    .then((result) => {
      return result.json();
    })
    .then((weather) => {

      const ulTags = document.querySelectorAll("main ul");
      ulTags.forEach((ul) => ul.lastChild.remove());
      h2.textContent = weather.nearest_area[0].areaName[0].value;
      ul[0].textContent = `Area:`;
      ul[0].after(weather.nearest_area[0].areaName[0].value);
      ul[1].textContent = `Region:`;
      ul[1].after(weather.nearest_area[0].region[0].value);
      ul[2].textContent = `Country:`;
      ul[2].after(weather.nearest_area[0].country[0].value);
      ul[3].textContent = `Currently:`;
      ul[3].after(` Feels like ${weather.current_condition[0].FeelsLikeF}°F`);
      ul[4].after(weather.weather[0].hourly[0].chanceofsunshine);
      ul[4].textContent = `Chance Of Sunshine: `;
      ul[5].after(weather.weather[0].hourly[0].chanceofrain);
      ul[5].textContent = `Chance Of Rain: `;
      ul[6].after(weather.weather[0].hourly[0].chanceofsnow);
      ul[6].textContent = `Chance Of Snow: `;

      let previousSearch = document.createElement("li")
      previousSearch.textContent = `${weather.nearest_area[0].areaName[0].value} - ${weather.current_condition[0].FeelsLikeF}°F `
      del.append(previousSearch)
      select.remove()
    
      const h3today = document.createElement("h3");
      h3today.textContent = "Today";

      const paragraphtoday = document.createElement("p");
      const strong01 = document.createElement("strong");
      strong01.textContent = `Average Tempeture: `;
      const avgTemp = weather.weather[0].avgtempF;
      paragraphtoday.append(strong01, avgTemp);
      today.append(h3today, paragraphtoday);

      const strong02 = document.createElement("strong");
      strong02.textContent = ` Max Temperture:`;
      const maxTemp = weather.weather[0].maxtempF;
      paragraphtoday.append(strong02, maxTemp);
      today.append(h3today, paragraphtoday);

      const strong03 = document.createElement("strong");
      strong03.textContent = ` Min Temperture:`;
      const minTemp = weather.weather[0].mintempF;
      paragraphtoday.append(strong03, minTemp);
      today.append(h3today, paragraphtoday);


      const h3tommorrow = document.createElement("h3");
      h3tommorrow.textContent = "Tommorrow";

      const paragraphtommorrow = document.createElement("p");
      const strong4 = document.createElement("strong");
      strong4.textContent = `Average Tempeture: `;
      const avgTemp1 = weather.weather[1].avgtempF;
      paragraphtommorrow.append(strong4, avgTemp1);
      tommorrow.append(h3tommorrow, paragraphtommorrow);

      const strong05 = document.createElement("strong");
      strong05.textContent = ` Max Temperture:`;
      const maxTemp1 = weather.weather[1].maxtempF;
      paragraphtommorrow.append(strong05, maxTemp1);
      tommorrow.append(h3tommorrow, paragraphtommorrow);

      const strong06 = document.createElement("strong");
      strong06.textContent = ` Min Temperture:`;
      const minTemp1 = weather.weather[1].mintempF;
      paragraphtommorrow.append(strong06, minTemp1);
      tommorrow.append(h3tommorrow, paragraphtommorrow);

      const h3day = document.createElement("h3");
      h3day.textContent = "The Day After Tommorow";

      const paragraphday = document.createElement("p");
      const strong7 = document.createElement("strong");
      strong7.textContent = `Average Tempeture: `;
      const avgTemp2 = weather.weather[2].avgtempF;
      paragraphday.append(strong7, avgTemp2);
      day.append(h3day, paragraphday);

      const strong08 = document.createElement("strong");
      strong08.textContent = ` Max Temperture:`;
      const maxTemp2 = weather.weather[2].maxtempF;
      paragraphday.append(strong08, maxTemp2);
      day.append(h3day, paragraphday);

      const strong09 = document.createElement("strong");
      strong09.textContent = ` Min Temperture:`;
      const minTemp2 = weather.weather[2].mintempF;
      paragraphday.append(strong09, minTemp2);
      day.append(h3day, paragraphday);

      aside.furture.innerHTML= ""
      
    });
});

const conversion = document.querySelector("#conversionForm");
conversion.addEventListener("submit", (event) => {
  event.preventDefault();
  let conversion = event.target.convert.value;
  let toC = document.querySelector("#to-c");
  let toF = document.querySelector("#to-f");
  if (toC.checked) {
    conversion = (conversion - 32) * (5 / 9);
    document.querySelector("#result").innerHTML = `${conversion.toFixed(2)}°C`;
  } else {
    conversion = conversion * (9 / 5) + 32;
    document.querySelector("#result").innerHTML = `${conversion.toFixed(2)}°F`;
  }
   document.querySelector(".main").appendChild(image);

conversion.innerHTML = ""
});

