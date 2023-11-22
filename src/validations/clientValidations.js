import * as yup from "yup"

const phoneRegExp = /^04(\s?[0-9]{2}\s?)([0-9]{3}\s?[0-9]{3}|[0-9]{2}\s?[0-9]{2}\s?[0-9]{2})$/

export const clientSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    phone: yup.string().required("Phone is required").matches(phoneRegExp, 'Phone number is not valid')
})