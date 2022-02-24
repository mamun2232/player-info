
const searchFood = () =>{
  // input fled er value nilam 
  const searchFlied = document.getElementById('search-filed')
  const searchText = searchFlied.value
  searchFlied.value = ''
  if(searchText == ''){
    const arrow =document.getElementById('errow')
    arrow.innerText = 'Please write sameting to display..'
   
  }
  else{
    // data anbo 
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   fetch(url)
   .then(res => res.json())
   .then(data => displaySearchResult(data.meals))

    // arrow handeling
   const arrow =document.getElementById('errow')
   arrow.innerText = ''

  }

  



}
const displaySearchResult = (meals) => {
  const searchResult = document.getElementById('search-result')
  searchResult.textContent = '';
  if(meals.length == 0 || meals.length == 'number'){
    const arrow =document.getElementById('errow')
    arrow.innerText = 'Please write sameting to display..'
  }
  else{
    meals.forEach(meal => {
      console.log(meal);
      const div = document.createElement('div')
      div.innerHTML = `
      <div  class="col h-100">
      <div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(1 , 250)}</p>
        </div>
      </div>
    </div>
    
      `
      searchResult.appendChild(div)
      
      
    })

  }
  
 
 
}

const loadMealDetail = (mealId) =>{
  // meal er id ta anlam 
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
  console.log(meal);
  const mealDetail = document.getElementById('show-detail')
  mealDetail.textContent = ''
  const div = document.createElement('div')
  div.innerHTML = `
  <div class="card mx-auto" style="width: 700px;">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${meal.strCategory}</h5>
    <p class="card-text">${meal.strInstructions}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Youtube Go Now</a>
  </div>
</div>
  `
  mealDetail.appendChild(div)

}