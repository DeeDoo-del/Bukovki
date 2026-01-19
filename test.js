const input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.addEventListener("click", () =>{
    inputValue = input.value
    window.TestAPI.createFile(inputValue)
    }
)