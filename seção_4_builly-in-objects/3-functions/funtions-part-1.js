function teste(a) {
    return a;
}


console.log(teste(`helo`));

teste2 = new Function(
    'a',
    'return arguments'
)

console.log(teste2('teste dois'));