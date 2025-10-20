import { instanceApiToken } from "../../../shared/utils/axios";
import type { joinGroupValues } from "../utils/schema";

export const joinGroup = (data: joinGroupValues) =>
  instanceApiToken.post("/groups/join", data).then((res) => res.data);
