export default function bs_list(haystack: number[], needle: number): boolean {
    const middle = Math.floor(haystack.length / 2)
    // base case
    if (haystack[middle] === needle) return true

    // check lower half of list
    else if (haystack[middle] > needle) {
        return bs_list(haystack.slice(0, middle), needle)
    }
    
    // check upper half of list
    else if (haystack[middle] < needle) {
        return bs_list(haystack.slice(middle+1, haystack.length), needle)
    }
    return false
}
