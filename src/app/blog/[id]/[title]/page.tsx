import BlogCard from "../components/BlogCard";

interface PageProps {
    params: {
        id: string;
        title: string;
    };
}

export default function Page({ params }: PageProps) {
    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold mb-6">Daftar Blog</h1>

            <BlogCard
                id={params.id}
                title={params.title}
                description="Artikel ini berisi pembahasan penting terkait sejarah dan inspirasi."
            />
        </div>
    );
}
