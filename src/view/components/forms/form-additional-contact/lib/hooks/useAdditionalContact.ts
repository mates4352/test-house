import {useState} from "react";
import {useFormAdditionalContactFormik} from "./useFormAdditionalContactFormik";

export const useAdditionalContact = (phone: string) => {
  const [isInputPhone, setInputPhone] = useState<boolean>(false)

  const onShowInput = () => {
    setInputPhone((value) => !value)
  }

  const [formik] = useFormAdditionalContactFormik(phone, onShowInput);


  return [formik, isInputPhone, onShowInput] as const
}