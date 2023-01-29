// give two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way
// ex. array = [f,f,f,f,f,f,t,t,t,t]
// because you would have to go down each branch. Another solution would be 
// to jump the sqrt(N) each time. If you hit a "t" value, you jump back 
// the sqrt(N) and then walk until you hit another or same "t" value.
// Because the max you're walking is sqrt(N) --> O(sqrt(N))
// first cystal ball is used on break
export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length))
    let i = jump
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) break //first ball used up    
   }
    i -= jump 
    for (let j=0; j<jump && i < breaks.length; j++, i++) {
        if (breaks[i]) return i
    }
    return -1 
}
