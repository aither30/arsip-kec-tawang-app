import Sidebar from '@/components/navbar';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

interface AppHomeProps {
    children: ReactNode;
}

export default function AppHome({ children }: AppHomeProps) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Sidebar />
            <div>
                <div>{children}</div>
            </div>
        </>
    );
}
