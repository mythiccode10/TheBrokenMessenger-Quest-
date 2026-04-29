const btn = document.getElementById("fetch-btn");
const list = document.getElementById("hero-list");
const loader = document.getElementById("loading-spinner");

// FIX: Added 'async' to the arrow function
btn.addEventListener("click", async () => {
    // 1. Show the loader
    loader.style.display = "block";
    list.innerHTML = ""; // Clear list for new "Summoning"

    try {
        // 2. FIX: Added 'await' to the fetch call
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // 3. FIX: Added 'await' to the .json() conversion
        const data = await response.json(); 

        // 4. Update the UI
        data.forEach(hero => {
            const li = document.createElement("li");
            li.innerText = hero.name;
            list.appendChild(li);
        });
    } catch (error) {
        console.error("The summoning failed:", error);
    } finally {
        // 5. FIX: Ensure loader is hidden AFTER the data is processed
        loader.style.display = "none";
    }
});
