const addTwoNumbers = function(l1, l2) {
    const s1 = l1.reverse().join('')
    const s2 = l2.reverse().join('')
    const sum = Number(s1) + Number(s2)
    return sum.toString().split('').map(x=> parseInt(x))
};
