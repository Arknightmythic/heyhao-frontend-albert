import z from "zod";

export const signUpSchema = z.object({
    photo: z.any().refine((file:File) =>file?.type?.startsWith("image/"), {message:"File must be an image"}),
    name:z.string().min(3, {message:"string must contain at least 3 characters(s)"}),
    email:z.email(),
    password:z.string().min(8,  {message:"string must contain at least 8 characters(s)"})

})

export const signInSchema = signUpSchema.pick({
    email:true,
    password:true
})

export const forgotPasswordSchema = signUpSchema.pick({
    email:true
})

export const updatePasswordSchema = z.object({
    password:z.string().min(8,  {message:"string must contain at least 8 characters(s)"}),
    confirmPassword:z.string().min(8,  {message:"string must contain at least 8 characters(s)"})
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",})

export type UpdatePasswordValues = z.infer<typeof updatePasswordSchema>   
export type SignUpValues = z.infer<typeof signUpSchema>
export type SignInValues = z.infer<typeof signInSchema>
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>