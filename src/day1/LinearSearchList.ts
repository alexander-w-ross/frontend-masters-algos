export default function linear_search(haystack: number[], needle: number): boolean {
    for (let num=0; num<haystack.length; num++) {
        if (haystack[num] === needle) return true
    }
    return false
    
}
