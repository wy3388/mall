export const setData = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getData = function (key) {
    let s = localStorage.getItem(key);
    return JSON.parse(s)
}
