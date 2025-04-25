import Navbar from '@/components/navbar';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

interface AppHomeProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppHomeProps) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Navbar />
            <main className="min-h-screen w-screen bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950">
                <div className="mx-6 px-6 py-2">{children}</div>
            </main>
        </>
    );
}
