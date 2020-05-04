export default {
    dateDifference: (birthDate) => {
        let date = birthDate.split('/')
        date = `${date[2]}-${date[1]}-${date[0]}`
        const date1 = new Date(date)
        const date2 = new Date()
        return Math.ceil(Math.abs(date2 - date1) / (1000 * 3600 * 24))
    }
}