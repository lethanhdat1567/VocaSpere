import z from 'zod';

export const registerBody = z
    .object({
        username: z.string().trim().min(1).max(225),
        email: z.string().email(),
        password: z.string().min(6).max(200),
        confirmPassword: z.string().min(6).max(200),
    })
    .strict()
    .superRefine(({ password, confirmPassword }, cts) => {
        if (password !== confirmPassword) {
            cts.addIssue({
                code: 'custom',
                message: 'Nhập lại mật khẩu không khớp',
                path: ['confirmPassword'],
            });
        }
    });

export type registerBodyType = z.TypeOf<typeof registerBody>;

export const loginBody = z
    .object({
        email: z.string().email(),
        password: z.string().min(6).max(200),
    })
    .strict();

export type loginBodyType = z.TypeOf<typeof loginBody>;
export const RegisterRes = z.object({
    data: z.object({
        account: z.object({
            id: z.number(),
            name: z.string(),
            email: z.string(),
        }),
        token: z.object({
            accessToken: z.string(),
            refreshToken: z.string(),
            accessTokenExpiresIn: z.number(),
            refreshTokenExpiresIn: z.number(),
        }),
    }),
    message: z.string(),
});

export type registerResType = z.TypeOf<typeof RegisterRes>;
