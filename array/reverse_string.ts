// Create a function that reverses a string 
// "Hi my name is Lionel Andres Messi" should be:
// isseM serdnA lenoiL si eman ym iH

function reverse(str: string): string {
    // check input
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Huumm... that's not good";
    }

    const backwards = [];
    for (let i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);        
    }
    return backwards.join("");
}
