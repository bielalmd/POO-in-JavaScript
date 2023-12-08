try {
    throw new Error('it`s not working')
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}