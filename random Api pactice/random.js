const dataLoad = () =>{
          fetch('https://randomuser.me/api/?results=5000')
          .then(res => res.json())
          .then(data => displayData(data.results))
          .catch(error =>{
                    
                              const Loading = document.getElementById('rundom-user')
                              const dev  = document.createElement('div')
                              dev.innerHTML = `
                              <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                              </div>
                              
                              `
                              Loading.appendChild(dev)
                    
          })
}

const displayData = (results) =>{
          const user = document.getElementById('rundom-user')
          console.log(results);
          
          results.forEach(result =>{
                    console.log(result);
                    const div = document.createElement('div')
                    div.classList.add('show' , 'border' , 'm-5', 'p-2')
                    div.innerHTML = `
                    <img src="${result.picture.large}" alt="">
                  
                    <h3>Name: ${result.name.first} ${result.name.last}</h3>
                    <p>Email: ${result.email}</p>
                    <p>Gender: ${result.gender}</p>
                    <p>Date of Birth: ${result.dop.age}</p>
                    
                    <button onclick="showdata(${result})" class="btn btn-primary">Click More detilas </button>
                    
                    `
                    user.appendChild(div)

          })

}
const showData = (re) =>{
          console.log(result);

}


