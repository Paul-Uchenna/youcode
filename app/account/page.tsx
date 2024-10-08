import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogoutButton } from "@/src/features/auth/LogoutButton";
import { getAuthSession } from "@/src/lib/auth";

import Link from "next/link";

export default async function AccountPage() {
  const session = await getAuthSession();

  if (!session) {
    throw new Error("No session found");
  }

  return (
    <Card className="m-auto mt-8 max-w-sm">
      <CardHeader className="flex flex-col items-center gap-4 space-y-0">
        <Avatar className="mb-2 size-32">
          <AvatarFallback>{session.user.email?.[0]}</AvatarFallback>
          {session.user.image && (
            <AvatarImage src={session.user.image} alt="user image" />
          )}
        </Avatar>
        <div className="flex flex-col gap-1">
          <CardDescription className="text-center">
            {session.user.name}
          </CardDescription>
          <CardTitle className="mt-1">{session.user.email}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/account/settings"
        >
          Settings
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="/admin"
        >
          Admin
        </Link>
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
