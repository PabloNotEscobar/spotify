import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const {id} = await params;

    if (!id) notFound();

    return <div>Artist ID: {id}</div>;
}