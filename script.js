fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
        
        for (const key in data) {

            //Country Name Fetcher
            const countryName = document.createElement('h2')
            countryName.classList.add("countryName");
            countryName.textContent = data[key].name;

            //Country Flag Fetcher
            const countryFlag = document.createElement('img');
            countryFlag.classList.add("countryFlag");
            countryFlag.src = data[key].flags.png;

            //Country Languages Fetcher
            const countryLanguage = document.createElement('h2');
            countryLanguage.classList.add("countryLanguage");
            countryLanguage.innerHTML = "Languages <br>"
            for (const lkey in data[key].languages) {
                countryLanguage.innerHTML = countryLanguage.innerHTML + "  " + data[key].languages[lkey].name + "  ";
            }

            //Constructing the Grid Item
            const  gridItem = document.createElement('div');
            gridItem.classList.add("grid-item");
            gridItem.appendChild(countryName);
            gridItem.appendChild(countryFlag);
            gridItem.appendChild(countryLanguage);

            //Adding the Grid Item to the Grid
            const grid = document.getElementsByClassName("grid-container");
            grid[0].appendChild(gridItem);



        }
    }

    );