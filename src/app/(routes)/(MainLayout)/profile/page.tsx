import testRequest from '@/HttpRequest/testRequest';
import { cookies } from 'next/headers';

async function Profile() {
    const cookiesStore = await cookies();
    const sessionToken = cookiesStore.get('sessionToken');
    const result = await testRequest.test(sessionToken?.value as string);
    console.log(result);

    return <div>sds</div>;
}

export default Profile;
