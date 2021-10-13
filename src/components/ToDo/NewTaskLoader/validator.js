import * as yup from "yup" 

export const TASK_VALIDATE = yup.object({
    NewTaskText: yup
    .string()
    .min(1, "минимум один симовол")
    .max(50, "максимум 50 символов")
    .required("поле не должно быть пустым")
     
})