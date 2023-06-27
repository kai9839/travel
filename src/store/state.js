let dafaultCity = '北京'
try {
    if (localStorage.city) {
        dafaultCity = localStorage.city
    }
} catch (e) { }

export default {
    city: dafaultCity
}