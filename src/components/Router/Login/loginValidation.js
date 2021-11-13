import * as yup from "yup"

export const loginValidator = yup.object().shape({
    email: yup
        .string("Must be a string")
        .email("Invalid email")
        .required("Field required"),
    password: yup
        .string("Must be a string")
        .matches(/.{8,}/, "Password must have at least 8")
        .required("Field required"),
})

