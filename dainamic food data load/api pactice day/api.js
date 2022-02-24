const showComment = () =>{
          fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res => res.json())
          .then(data => displayData(data))
}

const displayData =(comments) =>{
          const table = document.getElementById('table')
          comments.forEach(comment => {
                    const tbody = document.createElement('tbody')
                   tbody.innerHTML = `
                   <thead>
                 
                   <tr onclick="showDetail(${comment.id})">
                        <th  scope="row">ID: ${comment.id}</th>
                        <td>Name: ${comment.name}</td>
                        <td>Email: ${comment.email}</td>
                        <td>Comment: ${comment.body.slice(0, 50)}</td>
                      </tr>
                   
                   `
                   table.appendChild(tbody)
          })
}

const showDetail = (commentId) =>{
          console.log(commentId);
          const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`

          fetch(url)
          .then(res => res.json())
          .then(data => showInformation(data))

}
const showInformation = (information) =>{
          console.log(information);
          const showInforamtion = document.getElementById('user-information')
          showInforamtion.textContent = ''
          const div = document.createElement('div')
          div.classList.add('border', 'p-5')
          div.innerHTML = `
          <h3>Name: ${information.name} </h3>
          <p>Email: ${information.email} </p>
          <p>Post Id: ${information.postId} </p>
          <p>Id: ${information.id} </p>
          <p>User Detils: ${information.body} </p>
          
          `
          showInforamtion.appendChild(div)
}