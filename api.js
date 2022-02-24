const loadQuate = () =>{
          fetch('https://api.kanye.rest/')
          .then(res => res.json())
          .then(data => quate(data))
}

const quate = data => {
          console.log(data);
          const quate = document.getElementById('block-quate')
          quate.innerText = data.quote
}
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));