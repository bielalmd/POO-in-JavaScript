function identidade(args) {
    console.log(typeof args);
    return args;
}
console.log(identidade('string'));
console.log(identidade(5));
console.log(identidade(true));
