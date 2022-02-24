const boddyApi = () => {
   fetch('https://randomuser.me/api/?results=5')
   .then(res => res.json())
   .then(data => boddy(data))
}
boddyApi()

const boddy = data => {
          console.log(data);
          const results = data.results
          console.log(results);
          const div = document.getElementById('boddy')
          for(const result of results){
                    const p = document.createElement('p')
                    p.innerText = ` Name: ${result.name.first} ${result.name.last}
                    Email: ${result.email}
                    userName: ${result.login.username}`

                    div.appendChild(p)
                    
                    

          }

}