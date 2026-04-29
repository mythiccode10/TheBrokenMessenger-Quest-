const btn = document.getElementById("fetch-btn");
const list = document.getElementById("hero-list");
const loader = document.getElementById("loading-spinner");

// BUG 3: The function is missing the 'async' keyword
btn.addEventListener("click", () => {
    loader.style.display = "block";
    
    // BUG 4: Missing 'await' - this will return a Promise object, not the response
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    
    // BUG 5: Logic error - trying to use data before it's converted to JSON
    const data = response.json(); 

    loader.style.display = "none";
    
    data.forEach(hero => {
        const li = document.createElement("li");
        li.innerText = hero.name;
        list.appendChild(li);
    });
});
