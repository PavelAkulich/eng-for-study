import { useToast } from "@/components/ui/use-toast";
import { ErrorType } from "@/types/types";
import { useCallback, useState } from "react";

type SubmitFunctionParams<T> = {
  [t in keyof T]: string;
};
type UseSubmitButtonOptions<TOutput> = {
  onSuccess?: (data: TOutput) => void;
  onError?: (erros: any) => void;
};

type UseSubmitButtonFn<TInput, TOutput> =  (data: SubmitFunctionParams<TInput>) => Promise<{
    result: TOutput | null;
    error: ErrorType | null;
  }>;


export const useSubmitButton = <TInput, TOutput>(
  fn: UseSubmitButtonFn<TInput, TOutput>,
  options: UseSubmitButtonOptions<TOutput> = {},
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TOutput | null>(null);
  const [errors, setErrors] = useState<any | null>(null);
  const {toast} = useToast();
  const execute = useCallback(
    async (data: SubmitFunctionParams<TInput>) => {
      setLoading(true);
      try {
        const result = await fn(data);
        if (!result) return;
        if (result.result) {
          setData(result.result);
          options.onSuccess?.(result.result);
        }
        if (result.error) {
          console.log(result.error)
          setErrors(result.error);
          options.onError?.(result.error);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: result.error.message,
          })
        }
      } finally {
        setLoading(false);
      }
    },
    [options, fn]
  );

  return { loading, execute, data, errors };
};
