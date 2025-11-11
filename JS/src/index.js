//-----------------------------------------------------TASK 1-----------------------------------------------------//

function isPositive(number) {
    if (number > 0)
        return 'Positive';
    else if (number === 0)
        return 'Zero';
    else 
        return 'Negative'; 
}

console.log(isPositive(-1))

//-----------------------------------------------------TASK 2-----------------------------------------------------//

function checkAcces(userStatus) {
    switch (userStatus) {
        case 'admin': return 'Full Access Granted';
        case 'user': return 'Limited Access';
        case 'guest': return 'Read Only Access';
        default: return 'Access Denied';
    }
}

//-----------------------------------------------------TASK 3-----------------------------------------------------//

checkAcces('Hacker')

function isBetween(n, min, max) {
    if (n > min && n < max)
        return true;
    else 
        return false;
}

console.log(isBetween(6, 1, 5))