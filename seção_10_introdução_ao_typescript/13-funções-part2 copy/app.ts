function identidade<T>(args: T): T {
    console.log(typeof args);
    return args;
}

console.log(identidade<string>('string'));
console.log(identidade<number>(5));
console.log(identidade<boolean>(true));