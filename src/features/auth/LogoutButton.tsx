"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Loader, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signOut(),
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
        <Loader className="mr-4" size={12} />
      ) : (
        <LogOut className="mr-4" size={12} />
      )}
      Logout
    </Button>
  );
};
