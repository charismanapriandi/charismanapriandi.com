const uniqueString = (array: string[]) => {
  const unique = array.filter((value, index, current) => current.indexOf(value) === index)
  return unique
}

export default uniqueString;