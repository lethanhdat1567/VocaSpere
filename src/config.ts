import z from 'zod';

const schemaConfig = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string(),
});

const schemaProject = schemaConfig.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

if (!schemaProject.success) {
    console.log(schemaProject.error.issues);
    throw new Error('Cac gia tri trong file env khong hop le');
}

const envConfig = schemaProject.data;

export default envConfig;
