const loadCountrys = () =>{
          fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => displayCountry(data))
}

loadCountrys()

const displayCountry = countrys => {
          console.log(countrys);
         
          const allCountry = document.getElementById('all-country')
              
          countrys.forEach(country => {
                    const div = document.createElement('div')
                    div.classList.add('capital')  
                    console.log(country);
                    div.innerHTML = `
                    <h2>${country.name.common} </h2>
                    <p>${country.capital} </p>
                    <button onClick ="countrydata('${country}')"> CountryData </button>
                    
                    `
                    allCountry.appendChild(div)     
                    
          
          })
          
}

const countrydata = name =>{
         const url = `https://restcountries.com/v3.1/name/${name}`
        
         fetch(url)
         .then(res => res.json())
         .then(data => console.log(data))
}