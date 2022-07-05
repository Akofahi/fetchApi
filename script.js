fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementsByClassName("grid-container");
        console.log(data);

        for (const key in data) {

            let countryName = document.createElement('h2')
            countryName.classList.add("countryName");
            countryName.textContent = data[key].name;

            let countryFlag = document.createElement('img');
            countryFlag.classList.add("countryFlag");
            countryFlag.src = data[key].flags.png;

            let countryLanguage = document.createElement('h2');
            countryLanguage.classList.add("countryLanguage");
            countryLanguage.innerHTML = "Languages <br>"
            for (const lkey in data[key].languages) {
                countryLanguage.innerHTML = countryLanguage.innerHTML + "  " + data[key].languages[lkey].name + "  ";
            }

            let gridElement = document.createElement('div');
            gridElement.classList.add("grid-item");
            gridElement.appendChild(countryName);
            gridElement.appendChild(countryFlag);
            gridElement.appendChild(countryLanguage);

            let grid = document.getElementsByClassName("grid-container");
            grid[0].appendChild(gridElement);



        }
    }

    );