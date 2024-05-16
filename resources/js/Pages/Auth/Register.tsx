import { useEffect, FormEventHandler } from 'react'
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from "@/Components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
      <div className="flex h-screen">
        <Head title="Register"/>
        <Card className="m-auto max-w-sm">
          <form onSubmit={submit}>
            <CardHeader>
              <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Full Name"
                    required
                    onChange={(e) => setData('name', e.target.value)}
                  />

                  <InputError message={errors.name} className="mt-2"/>

                </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={data.email}
                      placeholder="m@example.com"
                      required
                      onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2"/>
                  </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        required
                        onChange={(e) => setData('password', e.target.value)}
                      />
                      <InputError message={errors.password} className="mt-2"/>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password_confirmation">Confirm Password</Label>
                      <Input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        required
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                      />
                      <InputError message={errors.password_confirmation} className="mt-2"/>
                    </div>
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href={route('login')} className="underline">
                    Login
                  </Link>
                </div>
            </CardContent>
          </form>
        </Card>
      </div>
    );
}
