const nabidka = ["CPU", "GPU", "RAM"]
const kosik = [];

function vypis_pole_do_elementu(array, output) {
    let out_value = document.getElementById(output)
    out_value.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        out_value.innerHTML += i + 1 + ". " + array[i] + "<br>"
    }
}
function pridejDoKosiku() {
    const input = document.getElementById("productInput");
    const index = parseInt(input.value) - 1

    if (index >= 0 && index < nabidka.length) {
        kosik.push(nabidka[index]);
        nabidka.splice(index, 1);
        vypis_pole_do_elementu(nabidka, "nabidka")
        vypis_pole_do_elementu(kosik, "kosik")
        input.value = "";
    } else {
        alert("Neplatné číslo produktu!")
    
}

vypis_pole_do_elementu(nabidka, "nabidka")