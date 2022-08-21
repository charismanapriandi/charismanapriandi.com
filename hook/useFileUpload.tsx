import { FormikErrors } from "formik";
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { TechnologyValues } from "schema/technology";

interface Props {
  value?: File | string;
  name: string;
  setValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<TechnologyValues>>
  shouldValidate: boolean;
}

/**
 * 
 * @param value File | string 
 * @param name String (name must same with field name)
 * @param setValue Formik setFieldValue
 *
 * @returns 
 */
const useFileUpload = ({ value, name, setValue, shouldValidate = false }: Props) => {
  const [preview, setPreview] = useState<string>()

  const resetPreview = useCallback(() => {
    setPreview(undefined)
  }, [])
  
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const val = !!e.currentTarget.files ? e.currentTarget.files[0] : undefined
    if (val) setValue(name, val, shouldValidate)
  }

  useEffect(() => {
    if (typeof value === 'string') {
      if (value.length !== 0) {
        setPreview(value)
      }
      setValue(name, undefined)
    } else if (value !== undefined) {
      const url = URL.createObjectURL(new Blob([value]))
      setPreview(url)
      setValue(name, value)
    }
  }, [value, setValue, name])
  
  return {
    preview,
    resetPreview,
    handleFile,
  }
}

export default useFileUpload;