function useCheckItems(array1,array2) {

  var item = []
  
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        break;
      }
      if (j === array2.length - 1) {
        item.push(array1[i])
      }
    }
  }

  return {item}
}

export default useCheckItems
