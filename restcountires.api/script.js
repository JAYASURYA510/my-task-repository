fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < 3; i++) {
          const card = document.getElementById(`card${i + 1}`);
          const country = data[i];
          card.querySelector('.card-header').innerText = country.name.common;
          card.querySelector('.card-body').innerHTML = `
          <img src="${country.flags.png}" alt="Flag" style="width: auto; height: auto; padding: 0px; margin-bottom: 20px;">
            <p>Capital: ${country.capital}</p>
            <p>Region: ${country.region}</p>
            <p>Country Codes: ${Object.keys(country.cca2).join(', ')}</p>
            <p>Latlng: ${Object.values(country.latlng).join(', ')}</p>
          `;
        }
      });