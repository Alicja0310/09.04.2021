// function sum(a, b){
//     return a +b
// }
// sum(5, 120)

// const arr = ["Jan", "Henryk", "Ania", "Mikołaj"]

// const xd = arr.map((item, index) => {
//     if(index > 1){
//         return item
//     }
// })

// for(let i =0; i < arr.length; i++ ){
//     console.log(arr[i])
// }

// arr.push("Róża")

// const app = document.getElementById('app')
// console.log(app)
// let a = document.createElement('p')
// app.appendChild(a)

// function addElement() {
//     const app = document.getElementById('app')
//     for(let i = 0; i < arr.length; i++){
//         let par = document.createElement('p')
//         par.innerText = arr[i]
//         app.appendChild(par)
//     }
// }

// const one = document.querySelector('p')
// console.log(one)
// const all = document.querySelectorAll('p')
// console.log(all)



// function sum(a, b, c){
//     return a + b + c
// }

// const wynik = sum(1, 2, 3)
// console.log(wynik)


// function dzielenie(par1, par2){
//   if (par1 === 0 || par2 === 0) {
//     alert ("liczba musi być większa od 0")
// } else {
//     return par1 / par2
// }}

// const wynik = dzielenie(6, 3)
// console.log(wynik)

const posts = [
    {
        autor: "Jan Kowalski",
        tytul: "Nowy świat"
  
    },
    {
        autor: "Adam Nowak",
        tytul: "Stary świat"
  
    },
    {
        autor: "Artur Olejnik",
        tytul: "Trzymam kredens"
    },
    {
        autor: "Marzena Żuber",
        tytul: "Jak grać"
    },
    {
        autor: "Radosław Krupa",
        tytul: "Książka kucharska"
    },
    {
        autor: "Marta Wiśniewska",
        tytul: "Jak nie być agresywnym"
    },
    {
        autor: "Robert Jaro",
        tytul: "Witcher 3"
    },
    {
        autor: "Aleksander Zając",
        tytul: "Conan Gray"
    },
    {
        autor: "Wiktoria Popielska",
        tytul: "Jak przestac gryzc ludzi"
    },
    {
        autor: "Karolina Kwiatkowska",
        tytul: "Roszpunka"
    },
    {
        autor: "Aleksandra Piotrowska",
        tytul: "Czerwony kapturek"
    },
    {
        autor: "Aldona Nowicka",
        tytul: "Śpiąca królewna"
    },
    {
        autor: "Dazai Osamu",
        tytul: "Zatracenie"
    },
    {
        autor: "Natalia Olszewska",
        tytul: "WITCH"
    },
    {
        autor: "Genowefa Pawlak",
        tytul: "Genshin"
    }
]

function addElement() {
    // pobieram div z index.html o id = 'app'
    const app = document.getElementById('app')
    //czyścimy div o id=app żeby po drugim kliknięciu nie dodawać ponownie tych samych postów
    app.innerHTML = ''
    const input = document.getElementById('inpSearch')
    console.log(input)
    input.disabled = false
    for(let i = 0; i < posts.length; i++){
        let paragraf = document.createElement('p')
        paragraf.setAttribute('class', 'post')
        paragraf.innerText = posts[i].autor + " " + posts[i].tytul
        app.appendChild(paragraf)
    }
}

function search(){
    const valueInput = event.target.value
    valueInput.trim()
    const app = document.getElementById('app')
    app.innerHTML = ""
    const postsFilter = posts.filter(post =>{
        return (post.tytul.search(valueInput) !== -1)
    })

    for (let i = 0; i < postsFilter.length; i++) {

        let paragraf = document.createElement('p')
        paragraf.setAttribute('class', 'post')
        paragraf.innerText = postsFilter[i].autor + " " + postsFilter[i].tytul
        app.appendChild(paragraf)
    }
}