import {useFormik} from "formik";
import {
  ValidationAdditionalContactSchema
} from "../../../../../../core/utils/helpers/validates/validation-schema-additional-contact";
import {useState} from "react";

export const useFormAdditionalContactFormik = (phone: string) => {
  const [isInputPhone, setInputPhone] = useState<boolean>(false)

  const onShowInput = () => {
    setInputPhone((value) => !value)
  }

  const formik = useFormik({
    initialValues: {
      phone
    },

    validationSchema: ValidationAdditionalContactSchema,

    onSubmit: values => {
      console.log(values)
      onShowInput()
    },
  });

  return [formik, isInputPhone, onShowInput] as const
}