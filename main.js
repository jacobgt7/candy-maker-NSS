const buyChocolate = () => {
    const chocolate = {
        type: "Milk chocolate"
    }
    return chocolate
}

const addFlavoring = (candyObj) => {
    candyObj.flavor = "Mint"
    return candyObj
}

const makeBarkMixture = (candyObj) => {
    if (candyObj.flavor === "Mint") {
        candyObj.mixed = true
    } else {
        candyObj.mixed = false
    }
    return candyObj
}

const bakeCandy = (candyObj) => {
    if (candyObj.mixed === true) {
        candyObj.baked = true
    } else {
        candyObj.baked = false
    }
    return candyObj
}

const breakBark = (candyObj) => {
    if (candyObj.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}

let chocolateBar = buyChocolate()
console.log(chocolateBar)

let flavoredChocolate = addFlavoring(chocolateBar)
console.log(flavoredChocolate)

let mixedChocolate = makeBarkMixture(flavoredChocolate)
console.log(mixedChocolate)

let bakedBark = bakeCandy(mixedChocolate)
console.log(bakedBark)

let barkPieces = breakBark(bakedBark)
console.log(barkPieces)