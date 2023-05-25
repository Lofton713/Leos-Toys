const toys = [

{
    id: 1,
    name:"RC_Car",
    maker:"Tyco",
    price:45,
    weight: 7
},
{
    id: 2,
    name: 'GameBoy_DS',
    maker: 'Nintendo',
    price: 120,
    weight: 2
},
{
    id: 3,
    name: 'Home_ Alone_House',
    maker: 'Lego',
    price: 150,
    weight: 7
}
]

const xbox = {
    id: 4,
    name: 'xbox',
    maker: 'Microsoft',
    price: 250,
    weight: 7 
}

const soccerBall = {
    id: 5,
    name: 'Tango',
    maker: 'Adidas',
    price: 150,
    weight: 1
}

toys.push(xbox, soccerBall)

console.log(toys)


// for (const toy of toys) {
//     //Return only one toy based on id
//     if (toy.id === toyToFind){
//     // increase the cost of each toy by 5%
//     toy.price = toy.price * 1.05
//     console.log( `the ${toy.maker} ${toy.name} costs $${toy.price}.`)

//     }
// }