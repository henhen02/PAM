//closure
function MyFunction() {
    let a = 10;
    return a;
}

function MyNewFunction() {
    return MyFunction();
}
document.getElementById("contoh_closure").innerHTML = MyNewFunction();

//iife
(function IIFE() {
    let a = document.getElementById("iife").innerHTML = "IIFE";
})();

//firstclass function
// assign sebagai variable
let assvar = function dalamvar() { 
    return "Ini assign kedalam variable";
}
document.getElementById("assvar").innerHTML = assvar();
// assign sebagai objek
let objek = { 
    assobj : function assobj() {
        return "Ini assign kedalam objek";
    }
}
document.getElementById("assobj").innerHTML = objek.assobj();
// passing sebagai argumen
function passing() {
    return "Ini dipassing sebagai ";
}

function passing2(a, b) {
    return (a() + b);
}
document.getElementById("passing").innerHTML = passing2(passing, "argumen");
// return sebagai hasil
function IniReturn(a) {
    return function() {
        return ("Ini mengembalikan fungsi sebagai " + a);
    }
}
document.getElementById("resret").innerHTML = IniReturn("hasil")();
 
// Higher order function
function Higher() {
    return "Ini adalah ";
}

function Higher2(fungsi, nama) {
    fungsi(); // mendefinisikan kepada sebuah fungsi jika sebuah parameter yang digunakan adalah sebuah fungsi
    return fungsi() + nama;
}
document.getElementById("higher").innerHTML = Higher2(Higher, "Higher Order Function");

// Execution Context
var nama_global = "User1";
function change() {
    var nama_lokal = "Hendri";
    document.getElementById("lokal").innerHTML = nama_lokal;
    document.getElementById("global").innerHTML = nama_global; // memanggil variable global
}
change();

// Execution Stack
function Penjumlahan1() { // fungsi ini menjadi stack 1
    return 10+10;
}
function Penjumlahan2() {
    return Penjumlahan1()+Penjumlahan1(); // stack 2
}
document.getElementById("stack1").innerHTML = Penjumlahan1(); // stack1
document.getElementById("stack2").innerHTML = Penjumlahan2(); // stack2

// Event Loop
let arr = ["satu", "dua", "tiga"];
let id = ["loop1", "loop2", "loop3"];

function looping() {
    for (var i = 0; i < 3; i++){
        document.getElementById(id[i]).innerHTML = arr[i];
    }
}
looping();

// Callbakcs
function myCallback() {
    return "Hallo ";
}
function main(a, callback) {
    return callback()+a;
}
document.getElementById("callback").innerHTML = main("ini callback", myCallback);

// Promise
let idbumbu = ["bumbu1", "bumbu2", "bumbu3"];
let bumbu_dapur = [
    {
        nama: "garam"
    },
    {
        nama: "gula"
    }
];

const add_bumbu = (bumbu_new) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            bumbu_dapur.push(bumbu_new);
            resolve(bumbu_dapur);
        }, 1000);
    });
}

const print_bumbu = () => {
    setTimeout(() => {
        let p = 0;
        bumbu_dapur.forEach((bumbu) => {
            for (var i in bumbu) {
                document.getElementById(idbumbu[p]).innerHTML = bumbu[i];
                p++;
            }
        });
    }, 1000);
}

const main_bumbu = async () => {
    await add_bumbu({nama: "cabai"});
    print_bumbu();
}

main_bumbu();