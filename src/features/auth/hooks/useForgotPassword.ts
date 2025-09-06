import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../api/forgetPassword";
import type { ForgotPasswordValues } from "../utils/schema";


export const useForgotPassword = () => {
  const { mutateAsync, isPending, isError, error } = useMutation({
    mutationFn: (data: ForgotPasswordValues) => forgotPassword(data),
  });
  return {
    mutateAsync,
    isPending,
    isError,
    error,
  };
};
