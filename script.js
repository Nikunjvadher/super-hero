const SUPERHERO_TOKEN = '521266653110947'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHeroBtn = document.getElementById('newHeroBtn')
const heroImageDiv = document.getElementById('heroImage')
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            // const name = `<h2>${json.name}</h2>`
            // const powerstats = `<p> intelligence:${json.powerstats.intelligence}</p>`
            const superHero = json
            showHeroInfo(superHero)
        })
}
const getSearchsuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
        .then(Response => Response.json())
        .then(json => {
            // console.log(json)
            const hero = json.results[0]
            showHeroInfo(hero)
        })
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }


const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`
    const img = `<img src="${character.image.url}" height=200 width=150/>`
    const stats = Object.keys(character.powerstats).map(stat => {
       return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}s</p>`
    }).join('')
    heroImageDiv.innerHTML = `${name} ${img} ${stats}`
    // console.log(stats.join(''))
    // return stats.join('')
    // or
    // for (const stats in character.powerstats) {
    //     console.log(stats)
    // }
}


const random = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}
newHeroBtn.onclick = () => getSuperHero(random())
searchBtn.onclick = () => getSearchsuperHero(searchInput.value)





// getSuperHero(12)

// const img = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'
// document.querySelector('body').innerHTML += `<img src='${img}' height=200 width=300/>`