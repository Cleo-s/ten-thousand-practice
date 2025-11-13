function greetUser(userName) {
    return `Hello, ${userName}!` || 'Hello, Guest!' 
}

function betterGreetUser(userName) {
    if (userName)
        return `Hello, ${userName}`
    else if (!userName | undefined)
        return 'Hello, Guest'; 
}

console.log(betterGreetUser('Vladik Pidor'))

function priceChecker(price, discount) {
    if (!discount)
        return price - 0;
    else if (discount > 0)
        return price - discount;
    else if (discount === 0)
        return price;
}

console.log(priceChecker(20, ))

function checkSessionAccess(isLogged, isAdmin) {
    const access = !isLogged && 'Access Denied' || isAdmin && 'Welcome, admin!' || 'Welcome back!'  
    return access;
}

console.log(checkSessionAccess(false, true))