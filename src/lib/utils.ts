import { EntityError } from '@/lib/http';
import { clsx, type ClassValue } from 'clsx';
import { UseFormSetError } from 'react-hook-form';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const normalizePath = (url: string | undefined) => {
    if (url) {
        return url.startsWith('/') ? url.slice(1) : url;
    } else {
        throw new Error('Khong tim thay url');
    }
};

export const handleErrorApi = ({ error, setError }: { error: any; setError?: UseFormSetError<any> }) => {
    if (error instanceof EntityError && setError) {
        error.payload.errors.forEach((error) => {
            setError(error.field, {
                type: 'server',
                message: error.message,
            });
        });
    } else {
        console.log(error);
        toast.error(error.payload.message ?? 'Loi khong xac dinh');
    }
};
