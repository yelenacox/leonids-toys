const toyToFind = 5;

const toys = [
    {
    name: "Toy Car", 
    id: 1,
    manufacturer: "Fisher Price",
    material: "plastic",
    ages: "5-10",
    price: 10
},
 {
    name: "Toy Doll",
    id: 2,
    manufacturer: "Barbie",
    material: "plastic",
    ages: "5-12",
    price: 15
},
{
    name: "Toy Ball",
    id: 3,
    manufacturer: "Hasbro",
    material: "rubber",
    ages: "0+",
    price: 5
}
]

const puzzle = {
    name: "Toy Puzzle",
    id: 4,
    manufacturer: "Buffalo Games",
    material: "paper",
    ages: "8+",
    price: 8
}

const actionFigure = {
    name: "Toy Action Figure",
    id: 5,
    manufacturer: "Disney",
    material: "plastic",
    ages: "6+",
    price: 15
}

toys.push(puzzle, actionFigure);


for (const toy of toys){
    if (toy.id === toyToFind){
        toy.price = toy.price * 1.05
        console.log(`The ${toy.material} ${toy.name} costs $${toy.price}.`)
    }}
    

