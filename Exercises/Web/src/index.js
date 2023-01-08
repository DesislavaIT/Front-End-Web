const response = await fetch("https://restcountries.com/v3.1/all");
const data = await response.json();

var ul = document.getElementById("countryList");

for(let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img
      class="country-image"
      alt="${data[i]["name"]["common"]} flag"
      src="${data[i]["flags"]["png"]}"
    />
    <div class="country-title">${data[i]["name"]["official"]}</div>
    <a href="/detail.html?country=${data[i]["name"]["common"]}" class="country-btn">More information</a>`;

    li.classList.add("country");

  ul.appendChild(li);
}