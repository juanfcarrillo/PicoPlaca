export default function splitInSubArray (array: any[], subArrayLength: number) {
  const subArrays = []
  for (let i = 0; i < array.length; i += subArrayLength) {
    const subArray = array.slice(i, i + subArrayLength)
    subArrays.push(subArray)
  }
  return subArrays
}
