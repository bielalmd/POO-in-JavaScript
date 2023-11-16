var userOne = {
    email: 'biel@js.com',
    name: 'Gabriel',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
}

console.log(userOne.name);