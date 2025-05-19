export const getUserAuth = async () => {
    const prom = new Promise((res) => {
        setTimeout(() => {
            res({
                username: 'Alion',
                email: 'alion@gmail.com',
                token: 'eyugyuewgfy8refgufnrf'
            })
        }, 1000);
    })
    return prom;
}
