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


export type SignUpValues = z.infer<typeof signUpSchema>
export type SignInValues = z.infer<typeof signInSchema>