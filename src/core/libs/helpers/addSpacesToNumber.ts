export const addSpacesToNumber = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
