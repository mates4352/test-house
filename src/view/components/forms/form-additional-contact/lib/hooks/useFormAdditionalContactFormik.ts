import {useFormik} from "formik";
import {
  ValidationAdditionalContactSchema
} from "../../../../../../core/utils/helpers/validates/validation-schema-additional-contact";

export const useFormAdditionalContactFormik = (phone: string, onShowInput: () => void) => {
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

  return [formik] as const
}