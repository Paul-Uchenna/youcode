"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Loader, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signIn(),
  });

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        mutation.mutate();
      }}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? (
        <Loader className="pr-4" size={12} />
      ) : (
        <LogIn className="pr-4" size={12} />
      )}
      Login
    </Button>
  );
};
