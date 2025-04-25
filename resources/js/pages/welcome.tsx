import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <AppLayout>
                <Head title="Dashboard" />
                <div className="flex h-full w-full flex-1">
                    <div className="w-full rounded-lg border p-4">
                        <h2>ini adalah website Arkata</h2>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
