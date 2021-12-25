export function dateAdapter (dateString) {
    const dateArray = dateString.split('T')
    const date = dateArray[0].split('-')
    const time = dateArray[1].split('.')[0].split(':')
    const monthList = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
    
    return {
        year: date[0],
        month: monthList[Number(date[1]) - 1],
        day: date[2],
        hours: time[0],
        minutes: time[1],
        seconds: time[2],
        getFullDate() {
            return `${this.day} ${this.month} ${this.year} ${this.hours}:${this.minutes}:${this.seconds}`
        },
        getDate() {
            return `${this.day} ${this.month} ${this.year}`
        },
        getTime() {
            return `${this.hours}:${this.minutes}:${this.seconds}`
        }
    }
}