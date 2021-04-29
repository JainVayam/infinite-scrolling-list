const setKey = (key, data) => localStorage.setItem(key, data)

const isUserLoggedIn = () => localStorage.getItem('isLoggedIn')
