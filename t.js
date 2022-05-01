const JSONCrushSwap = (string, forward=1)=>
{
    // swap out characters for lesser used ones that wont get escaped
    const swapGroups =
    [
        ['"', "'"],
        ["':", "!"],
        [",'", "~"],
        ['}', ")", '\\', '\\'],
        ['{', "(", '\\', '\\'],
    ];

    const swapInternal=(string, g)=>
    {
        let regex = new RegExp(`${(g[2]?g[2]:'')+g[0]}|${(g[3]?g[3]:'')+g[1]}`,'g');
        return string.replace(regex, $1 => ($1 === g[0] ? g[1] : g[0]));
    }

    // need to be able to swap characters in reverse direction for uncrush
    if (forward)
        for (let i = 0; i < swapGroups.length; ++i)
            string = swapInternal(string, swapGroups[i]);
    else
        for (let i = swapGroups.length; i--;)
            string = swapInternal(string, swapGroups[i]);

    return string;
}

console.log(JSONCrushSwap("{\"a\": \"() {} }) {(\"}"))
console.log(JSONCrushSwap("':"))
