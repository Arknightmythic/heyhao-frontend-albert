import { z } from "zod"
import { instanceApiToken } from "../../../shared/utils/axios"
import type { BaseResponse } from "../../../shared/types/response"

export const discoverGroupsSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    type: z.string(),
    about: z.string(),
    room: z.object({
      _count: z.object({ messages: z.number(), members: z.number() })
    }),
    photo_url: z.string()
  })
)



export type DiscoverGroupsValues = z.infer<typeof discoverGroupsSchema>

export const getDisccoverGroups = (query = ''):Promise<BaseResponse<DiscoverGroupsValues>>=> instanceApiToken.get(`/groups?name=${query}`).then(res => res.data)