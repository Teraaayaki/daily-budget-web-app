import dayjs from "dayjs"

export const formatDateToMMDDYYYY = (date: Date) => {
  return dayjs(date).format("MM/DD/YYYY")
}

export const formatDateToMMMMDDYYYY = (date: Date) => {
  return dayjs(date).format("MMMM DD, YYYY").toUpperCase()
}
