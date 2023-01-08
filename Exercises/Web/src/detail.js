const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const countryName = urlParams.get('country')
const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
const country = (await response.json())[0];

var div = document.getElementsByClassName("column")[0];
var bordersString = "none";
if(country["borders"])
{
  const codes = country["borders"].join(",");
  const bordersResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
  const borders = await bordersResponse.json();
  bordersString = borders.map(b => b["name"]["common"]).join(", ");
}
//http://universities.hipolabs.com/search?country=bulgaria

const universitiesResponse = await fetch(`http://universities.hipolabs.com/search?country=${countryName}`);
const universities = await universitiesResponse.json();

div.innerHTML = `
<div class="detail-page-header">
  <img
    src="${country["flags"]["png"]}"
    class="detail-page-header-image"
    alt=""
  />
  <div class="detail-page-header-title">${country["name"]["official"]}</div>
  <button id="closeBtn">Close</button>
</div>

<div class="detail-page-content-box">
  <div>
    <div class="detail-page-content-box-title">Country details</div>
    <div class="detail-page-content-box-content">
      Capital: ${country["capital"][0]} <br />
      Region: ${country["region"]} <br />
      Subregion: ${country["subregion"]} <br />
      Country area: ${country["area"]} km2 <br />
      Borders: ${bordersString}
    </div>
  </div>
</div>

<div class="detail-page-content-box">
  <div>
    <div class="detail-page-content-box-title">Additional details</div>
    <div class="detail-page-content-box-content">
      Population: ${country["population"]} <br />
      Languages: ${Object.values(country["languages"]).join(", ")} <br />
      Timezone: ${country["timezones"][0]} <br />
      Currency: ${Object.values(country["currencies"]).map(c => c.name).join(", ")}
    </div>
  </div>
</div>

<div class="detail-page-content-box">
  <div>
    <div class="detail-page-content-box-title">Univesrty list</div>
    <div class="detail-page-content-box-content">
      <ul id="universities-list">
      ${universities.map(u => "<li>" + u["name"])}
      </ul>
    </div>
  </div>
</div>`;