
const obj = {
    [Symbol.iterator]: function() {
        let step = 0
        const iterator = {
            next: function() {
                step++ 
                if (step == 1){
                return {value: "Hello", done: false}
            } else if (step == 2) {
                return {value: "World", done: false}
            }
        return {value: undefined, done: true}
        },
    }
        return iterator
    },
}


for (const word of obj) {
    console.log(word)
}

function* generator() {
    yield "Hello"
    yield "World"
}

const gen = generator()
for (const word of gen) {
    console.log(word)
}