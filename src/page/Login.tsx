import { useState } from "react";
import { useAuthContext } from "../store/authStore.ts";
import { Link } from "react-router-dom";

import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Button } from "@/components/ui/button.tsx";
import NavImage from "@/assets/bard.avif";

export function Login() {
  const [err, setErr] = useState(false);
  const { login } = useAuthContext();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await login({ email, password });
    } catch (e) {
      setErr(true);
    }
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="mail">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            {err && <span>Something went wrong</span>}
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src={NavImage}
          alt="Image"
          width="1920"
          height="1080"
          className="max-h-[100dvh] w-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
