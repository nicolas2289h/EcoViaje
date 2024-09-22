export const formatDate = (date) => {
    let formattedDate = date.split('-').reverse().join('/')
    return formattedDate
}
