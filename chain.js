const data = [{id: 1, name: 'abul', address: 'kochukhet'}];

console.log(data[0].name);

const product = {
    count : 5000,
    data:  [
        {id: 1, name: 'abul', address: 'kochukhet'},
        {id: 2, name: 'bul', address: 'nilkhet'},
        {id: 4, name: 'kabul', address: 'badmkhet'},
    ]
}
console.log(product.data[0].address)

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
// console.log(user.address.street.first)

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
console.log(user2.address.city)
console.log(user2.address.street?.first)
console.log(user.address.street?.first)