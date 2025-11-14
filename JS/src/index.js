function checkSessionAccess(isLogged, isAdmin) {
    const access = !isLogged && 'Access Denied' || isAdmin && 'Welcome, admin!' || 'Welcome back!'  
    return access;
}

console.log(checkSessionAccess(false, true))

function getDisplayName(name) {
    return (name ?? 'Guest') || (name || 'Anonymous')   
}

console.log(getDisplayName('Misha'))