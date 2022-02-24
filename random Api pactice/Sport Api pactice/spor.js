const searchPlayer = () =>{
          const searchFlied = document.getElementById('search-filed')
          const searchText = searchFlied.value
          searchFlied.value = ''
          document.getElementById('spinner').style.display = 'block'
          const url =(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`)
          fetch(url)
          .then(res => res.json())
          .then(data => displayPlayer(data.player))
       
}

const displayPlayer = (players) =>{
          
          const show = document.getElementById('display-player')
          show.textContent = ''
          document.getElementById('spinner').style.display = 'none'
          players.forEach( player =>{
            console.log(player);
                    const dev = document.createElement('div')
                     dev.innerHTML = `
                     <div class="card">
                       <img src="${player.strCutout}" class="card-img-top img-fluid" alt="...">
                       <div class="card-body">
                         <h5 class="card-title">${player.strPlayer}</h5>
                         <p class="card-text">Date Of Birth: ${player.dateBorn} </p>                     
                         <p class="card-text">Location: ${player.strBirthLocation} </p> 
                         <p class="card-text">${player.strDescriptionEN.slice(0, 200)}</p>

                         <button onclick="information(${player.idPlayer})" class="btn btn-danger">More detals </button>
                       </div>
                     </div>
                   </div>

                     ` 
                     show.appendChild(dev)
          })

}

const information = (playerId) =>{
       const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}
       `
          fetch(url)
          .then(res => res.json())
          .then(data => showInformation(data.players[0]))

}

const showInformation = (players) =>{
  const div = document.createElement('div')
  div.innerHTML = `
  
  `
  console.log(players);

}

