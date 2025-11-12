function StrictEqual(a, b) {
    if (typeof(a) === typeof(b))
        return true;
    else 
        return 'type of A is not equal type of B';
}

console.log(StrictEqual(1, 2));

function getRole(role) {
    switch (role) {
        case 'admin': return 'Welcome Admin';
        case 'user': return 'Welcome User';
        default: 'Access denied';
    }
}

console.log(getRole('admin'));