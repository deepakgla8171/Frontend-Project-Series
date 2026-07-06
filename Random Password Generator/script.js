const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertconEl = document.querySelector(".alert-con");
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
    inputEl.value = password;
    alertconEl.innerText = password + "copied";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);

}