export const findFirstDiff = (a, b) => {
    const longerLength = Math.max(a.length, b.length);
    for (let i = 0; i < longerLength; i++) {
       if (a[i] !== b[i]) return i;
    }
    return -1; 
};