const setKey = (key, data) => localStorage.setItem(key, data)

<<<<<<< 6c9aab4ba609156ab040ad7d50364d26d1fe42b5
const isLoggedIn = () => localStorage.getItem('isLoggedIn')

export { setKey, isLoggedIn }
=======
const isUserLoggedIn = () => localStorage.getItem('isLoggedIn')
>>>>>>> Feature/login (#1)
