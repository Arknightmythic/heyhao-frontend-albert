import { z } from "zod";
import { instanceApiToken } from "../../../shared/utils/axios";
import type { BaseResponse } from "../../../shared/types/response";

export const getDetailGroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  about: z.string(),
  type: z.string(),
  assets: z.array(z.object({ id:z.string(), filename: z.string() })),
  benefit:z.array(z.string()),
  price:z.number(),
  room: z.object({
    members: z.array(
      z.object({
        user: z.object({ name: z.string(), photo_url: z.string() }),
        joined_at: z.string(),
      })
    ),
    _count: z.object({ members: z.number() }),
  }),
  photo_url: z.string(),
});

export type DetailGroupValues = z.infer<typeof getDetailGroupSchema>;

export const getDetailGroup = async (
  id: string
): Promise<BaseResponse<DetailGroupValues>> =>
  instanceApiToken.get(`/groups/${id}`).then((res) => res.data);
