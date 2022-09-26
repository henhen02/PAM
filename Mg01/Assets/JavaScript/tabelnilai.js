let table = document.getElementById("TabelNilai")

let CekNilai = (x) => {
    let y;
    if (x < 10) {
        y = "E";
    }
    else if (x >= 10 && x < 40) {
        y = "D";
    }
    else if (x >= 40 && x < 50) {
        y = "C";
    }
    else if (x >= 50 && x < 60) {
        y = "BC";
    }
    else if (x >= 60 && x < 70) {
        y = "B";
    }
    else if (x >= 70 && x < 80) {
        y = "AB";
    }
    else {
        y = "A";
    }
    return y;
}

for (let i = 1; i < table.rows.length; i++){
    let data = table.rows[i].cells[3].innerHTML;
    table.rows[i].cells[4].innerHTML = CekNilai(data);
}