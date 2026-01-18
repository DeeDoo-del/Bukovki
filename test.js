// Файл для теста прелоад скрипта
    const titleInput = document.getElementById("title")
    const setBtn = document.getElementById("btn")

    setBtn.addEventListener("click", () => {
        const title = titleInput.value
        window.ElectronAPI.setTitle(title)
    })
