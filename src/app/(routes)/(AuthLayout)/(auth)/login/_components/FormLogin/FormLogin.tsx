'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginBody, loginBodyType, registerResType } from '@/schemaValidations/authe.schema';
import authApiRequest from '@/HttpRequest/authRequest';
import { useRouter } from 'next/navigation';
import { handleErrorApi } from '@/lib/utils';
import { useAppContext } from '@/app/AppProvider';

const formSchema = loginBody;

export function FormLogin() {
    const router = useRouter();
    const { setUser } = useAppContext();
    // 1. Define your form.
    const form = useForm<loginBodyType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: loginBodyType) {
        try {
            const result = await authApiRequest.login(values);
            await authApiRequest.auth({ data: result.payload as registerResType });
            setUser((result.payload as any).data.account);
            router.push('/');
        } catch (error: any) {
            handleErrorApi({ error, setError: form.setError });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password..." {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </Form>
    );
}
