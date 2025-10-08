function muunna(event) {
    event.preventDefault();

    if (document.getElementById("numero").value == "") {
        alert("Kirjota nyt jotain hyvä mies");
        return;
    }
    let valinta = document.getElementById("muunnin").value;
    const laskettava = parseFloat(document.getElementById("numero").value);
    if (isNaN(laskettava) === true) {
        alert("Laita jätkä numero äläkä mitään muuta!!!!");
        return;
    }

    let tulos;

    if (valinta === "Fahrenheit") {
        tulos = (laskettava * 1.8) + 32;
        if (tulos < -459.66999999) {
            alert("Ei ole mahdollista, absoluuttinen nollapiste saavutettu");
            return;
        }
    } else if (valinta === "Celcius") {
        tulos = (laskettava - 32) / 1.8;
        if (tulos < -273.1499999) {
            alert("Ei ole mahdollista, absoluuttinen nollapiste saavutettu");
            return;
        }
    }

    let dm = 1;
    const selected = document.querySelector('input[name="desimaali"]:checked');
    if (selected) {
        dm = Number(selected.value);
    }

    let mtulos = tulos.toFixed(dm)

    document.getElementById("tulos").innerHTML = `${mtulos}`;
}

document.getElementById("muunna").addEventListener("click", muunna);
