import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../store/authStore.ts";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

export function Register() {
  const [err, setErr] = useState(false);
  const { register } = useAuthContext();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const username = e.target[0].value;
    const displayName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    try {
      await register({ username, email, password, displayName });
    } catch (e) {
      console.log(e);
      setErr(true);
    }
  }

  return (
    <div className={"flex h-[100dvh] justify-center items-center w-full"}>
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="text">Username</Label>
              <Input
                id="text"
                type="text"
                placeholder="username"
                required
                maxLength={32}
                minLength={2}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="text">Display Name</Label>
              <Input
                id="text"
                type="text"
                placeholder="Display name"
                maxLength={32}
                minLength={2}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            {err && <span>Something went wrong</span>}
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
