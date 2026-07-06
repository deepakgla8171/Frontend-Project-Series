const btnEl = document.querySelector(".btn")
btnEl.addEventListener("click", () => {
    createPassword()
})

function createPassword() {
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/{}[]|~"
    const passwordlength = 10;
    let password = ""
    for (let index = 0; index < passwordlength.length; index++) {
        const randomNum = Math.floor(Math.random() * char.length);
        password += char.substring(randomNum, randomNum + 1);

    }
}