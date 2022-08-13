import { useEffect } from "react"
import { useState } from "react"

const useUniqueValue = (array: string[]) => {
  const [list, setList] = useState<string[]>([])
  
  useEffect(() => {
    setList(
      array.filter((value, index, current) => 
        current.indexOf(value) === index
      )
    )
  }, [array])
  
  return list
}

export default useUniqueValue;