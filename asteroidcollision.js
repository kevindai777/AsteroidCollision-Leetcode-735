//Objective is to find the resulting array after collisions occur in a 1D array,
//where the direction of the asteroid is determinant on whether it is positive
//or negative. We check from left to right.

let asteroids = [5, 10, -5]


//O(n) solution using a stack

let index = 0
let stack = []

while (index < asteroids.length) {
    
    //If we pass by a positive element, OR
    //If our stack is empty, OR
    //If the top of the stack is negative...
    //We push the element in
    if (asteroids[index] >= 0 || stack.length < 1 || stack[stack.length - 1] < 0) {
        stack.push(asteroids[index++])
        
    //If the collision is negative, then the positive asteroid explode, so pop 
    //it out of the stack
    } else if (asteroids[index] + stack[stack.length - 1] < 0) {
        stack.pop()
    
    //If the collision is 0, then both explode, so pop the positive out of the stack
    //and skip over the negative element
    } else if (asteroids[index] + stack[stack.length - 1] == 0) {
        stack.pop()
        index++
    } else {
        index++
    }
}

return stack