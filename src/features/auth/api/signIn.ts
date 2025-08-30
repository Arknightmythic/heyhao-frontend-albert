import type { BaseResponse } from "../../../shared/types/response";
import instanceApi from "../../../shared/utils/axios";
import type { SignInValues } from "../utils/schema";
import type { signUpResponseSchema } from "./signUp";

export const signIn = async (
  data: SignInValues
): Promise<BaseResponse<signUpResponseSchema>> =>
  instanceApi.post("/auth/sign-in", data).then((res) => res.data);
