export const getPagesCount = (totalElems, limit) => {
  return Math.ceil(totalElems / limit)
}

export const getPagesArray = () => {
  let result = []
  for (let i = 1; i <= 10; i++) {
    result.push(i)
  }
  return result;
}