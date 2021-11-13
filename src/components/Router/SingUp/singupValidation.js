import * as yup from 'yup'

export const singupValidator = yup.object().shape({
    firstName: yup
        .string()
        .min(3, "Name should be more than 2")
        .max(20, "Name should be maximum 20")
        .required("Field required"),
    lastName: yup
        .string()
        .min(3, "Last name should be more than 2")
        .max(20, "Last name should be maximum 20")
        .required("Field required"),
    displayName: yup
        .string()
        .min(4, "Display name should be more than 4")
        .max(10, "Display name should be maximum 10")
        .required("Field required"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Field required"),
    password: yup
        .string()
        .matches(/(?=.*?[0-9])/, "Password must have at least one digit")
        .matches(/(?=.*?[a-zA-Z])/, "Password must have English letters")
        .matches(/.{8,}/, "Password must have at least 8")
        .required("Field required"),
    passwordConf: yup
        .string()
        .oneOf([yup.ref("password")],"Passwords must match")
        .required("Field required"),
});