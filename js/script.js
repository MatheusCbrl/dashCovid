let allCities = [];
let resultados = [];
let cities = [];
let filtredCities = [];
let filtredPerState = [];
let search = null;
let inputSearch = null;
let tabCities = null;
let tabCitiesHist = null;
let tabState = null;
let states = {
  totalCases: null,
  totalDeaths: null,
};

window.addEventListener('load', () => {
  search = document.querySelector('#search');
  searchHist = document.querySelector('#searchHist');
  inputSearch = document.querySelector('#inputSearch');
  inputSearchHist = document.querySelector('#inputSearchHist');
  tabCities = document.querySelector('#tabCities');
  tabCitiesHist = document.querySelector('#tabCitiesHist');
  tabState = document.querySelector('#tabState');
  console.log('loading...');
  doFetch();
});

async function doFetch() {
  for (let index = 1; index < 120; index++) {
    let url = fetch(
      `https://brasil.io/api/dataset/covid19/caso/data/?format=json&page=${index}`
    );

    const res = await url;
    const json = await res.json();

    resultados.push(json.results);
  }

  resultados.forEach((arrayCities) => {
    arrayCities.forEach((city) => {
      allCities.push(city);
    });
  });

  cities = allCities.map((item) => {
    const {
      city,
      city_ibge_code,
      confirmed,
      death_rate,
      deaths,
      estimated_population_2019,
      state,
      date,
      is_last,
    } = item;
    return {
      city: city === null ? 's/nome' : city,
      ibge_code: city_ibge_code,
      cases: confirmed,
      mortality: death_rate,
      deaths: deaths,
      population: estimated_population_2019,
      state: state,
      date: date,
      is_last: is_last,
    };
  });
  render();
}

function render() {
  activateInput();
  activateInputHist();
}
//==================Ultima data =================================
function activateInput() {
  function handleTyping(event) {
    const key = event.key === 'Enter' ? event.key : '';
    let searchQuery = event.target.value.toLowerCase();
    if (key && searchQuery !== '') {
      searchCity(searchQuery);
      clearInput();
    }
  }

  function clickSearch(event) {
    let searchQuery = inputSearch.value;
    if (searchQuery !== '') {
      searchCity(searchQuery);
      clearInput();
    }
  }

  function searchCity(searchQuery) {
    let query = searchQuery.split(', ');
    filtredCities = cities.filter((item) => {
      let cityName = item.city.toLowerCase();
      let stateCity = item.state.toLowerCase();
      if (
        cityName === query[0] &&
        stateCity === query[1] &&
        item.is_last === true
      ) {
        return item;
      }
    });
    renderCitiesList(filtredCities);
  }
  inputSearch.focus();
  inputSearch.addEventListener('keyup', handleTyping);
  search.addEventListener('click', clickSearch);
}
//==================Histórico completo =================================
function activateInputHist() {
  function handleTypingHist(event) {
    const key = event.key === 'Enter' ? event.key : '';
    let searchQuery = event.target.value.toLowerCase();
    if (key && searchQuery !== '') {
      searchCityHist(searchQuery);
      clearInputHist();
    }
  }

  function clickSearchHist(event) {
    let searchQuery = inputSearchHist.value;
    if (searchQuery !== '') {
      searchCityHist(searchQuery);
      clearInputHist();
    }
  }

  function searchCityHist(searchQuery) {
    let query = searchQuery.split(', ');
    filtredCities = cities.filter((item) => {
      let cityName = item.city.toLowerCase();
      let stateCity = item.state.toLowerCase();
      if (
        cityName === query[0] &&
        stateCity === query[1] &&
        item.is_last === false
      ) {
        return item;
      }
    });
    renderCitiesListAll(filtredCities);
  }
  inputSearchHist.focus();
  inputSearchHist.addEventListener('keyup', handleTypingHist);
  searchHist.addEventListener('click', clickSearchHist);
}
function renderCitiesList(cities) {
  let citiesHTML = '<div>';

  cities.forEach((item) => {
    const {
      city,
      ibge_code,
      cases,
      mortality,
      deaths,
      population,
      state,
      date,
    } = item;

    const cityHTML = `
        <table class=" table table-responsive-sm ">
            <thead>
                <tr>
                    <th>CIDADE</th>
                    <th>ESTADO</th>
                    <th>CÓDIGO DO IBGE</th>
                    <th>CASOS</th>
                    <th>MORTALIDADE</th>
                    <th>MORTES</th>
                    <th>POPULAÇÃO</th>
                    <th>ATUALIZAÇÃO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${city}</td>
                    <td>${state}</td>
                    <td>${ibge_code}</td>
                    <td>${cases}</td>
                    <td>${mortality}</td>
                    <td>${deaths}</td>
                    <td>${population}</td>
                    <td>${date}</td>
                </tr>
            </tbody>
        </table>
        `;
    citiesHTML += cityHTML;
  });

  citiesHTML += '</div>';
  tabCities.innerHTML = citiesHTML;
}
function renderCitiesListAll(cities) {
  let citiesHTML = '<div>';

  cities.forEach((item) => {
    const {
      city,
      ibge_code,
      cases,
      mortality,
      deaths,
      population,
      state,
      date,
    } = item;

    const cityHTML = `
        <table class=" table table-responsive-sm ">
            <thead>
                <tr>
                    <th>CIDADE</th>
                    <th>ESTADO</th>
                    <th>CÓDIGO DO IBGE</th>
                    <th>CASOS</th>
                    <th>MORTALIDADE</th>
                    <th>MORTES</th>
                    <th>POPULAÇÃO</th>
                    <th>ATUALIZAÇÃO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${city}</td>
                    <td>${state}</td>
                    <td>${ibge_code}</td>
                    <td>${cases}</td>
                    <td>${mortality}</td>
                    <td>${deaths}</td>
                    <td>${population}</td>
                    <td>${date}</td>
                </tr>
            </tbody>
        </table>
        `;
    citiesHTML += cityHTML;
  });

  citiesHTML += '</div>';
  tabCitiesHist.innerHTML = citiesHTML;
}
function clearInput() {
  inputSearch.value = '';
  inputSearch.focus();
}
function clearInputHist() {
  inputSearchHist.value = '';
  inputSearchHist.focus();
}
