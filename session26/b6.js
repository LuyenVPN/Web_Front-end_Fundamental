let arr = ["2025-03-10", "2024-12-25", "2023-07-01"]

let validDate = (str) => {
    return str.map(dateStr => {
        let date = new Date(dateStr)
        let day = String(date.getDate())
        let month = String(date.getMonth() + 1).padStart(2, '0')
        let year = String(date.getFullYear())

        return `${day}/${month}/${year}`
    })
}

console.log(validDate(arr));