async function searchFood(){
    const Foodsdiv = document.getElementById("foods");
    const endpoint = "https://www.themealdb.com/api/json/v1/1/search.php?s";
    try{
        const res = await fetch(endpoint);
        const data = await res.json();
            
                data.meals.forEach(meal => {
                    const card = document.createElement("div");
                    card.classList.add("food-card");
                    card.innerHTML = `
                    <img src = "${meal.strMealThumb}" alt = "${meal.strMeal}">
                    <h3> Title : ${meal.strMeal}</h3>
                    <p>Catergory : ${meal.strCategory}</p>
                    <button onclick = "showdetails(${meal.idMeal})"> Details</button>
                    `;
                    Foodsdiv.appendChild(card);
                    
                });
            
        

    }
    catch(error){
        console.log(error);
    }
} 
 async function searchingfoods()
{
    const searchinput = document.getElementById("searchInput").value;
    const Foodsdiv = document.getElementById("foods");
    Foodsdiv.innerHTML = "";
    const notfounddiv = document.getElementById("notfound");
    const endpoint2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchinput}`;
    if(searchinput === "")
    {
         notfounddiv.innerHTML = "type the food name you want to search";
        return;
    }
    try{
        const res2 = await fetch(endpoint2);
        const data2 = await res2.json();
        if(!data2.meals)
        {
            notfounddiv.innerHTML = "the food you search not found";
        }
        else
        {
             data2.meals.forEach(meal => {
                    const card = document.createElement("div");
                    card.classList.add("food-card");
                    card.innerHTML = `
                    <img src = "${meal.strMealThumb}" alt = "${meal.strMeal}">
                    <h3> Title : ${meal.strMeal}</h3>
                    <p>Catergory : ${meal.strCategory}</p>
                    <button onclick = "showdetails(${meal.idMeal})"> Details</button>
                    `;
                    Foodsdiv.appendChild(card);
                    
                });
            

        }

    }catch(error){
        console.log(error);
    }
}
function showdetails(ID) {
    localStorage.setItem("mealID", ID);
    window.location.href = "details.html";
    console.log(window.location.href);
}
searchFood();






