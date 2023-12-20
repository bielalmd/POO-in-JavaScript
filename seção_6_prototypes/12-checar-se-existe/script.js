if(typeof Array.prototype.checkLength !== 'function') {
    Array.prototype.checkLength = function() {
        return this.length;
    }
}

if(typeof Array.prototype.checkLength !== 'function') {
    Array.prototype.join = function() {
        return this[0] + this[1] + this[2]
    }
}




let a = [1,2,3,4,5,6,7]
let b = [13,2456]

console.log(a.checkLength());
console.log(b.checkLength());
console.log(a.join());