import z from "zod";

export const SearchSchema = z.object({
    query: z.string()
})

export const joinGroupSchema = z.object({
    group_id:z.string()
})

export type SearchValues = z.infer<typeof SearchSchema>
export type joinGroupValues = z.infer<typeof joinGroupSchema>