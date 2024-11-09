import { getSomeDataById } from "../../actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getSomeDataById(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div className="p-4">
      <Link
        href="/"
        className="inline-block mb-4 text-blue-500 hover:text-blue-600"
      >
        ← Back to List
      </Link>

      <h1 className="text-2xl font-bold mb-4">Item Details</h1>
      <div className="border border-gray-300 rounded p-4">
        <p>ID: {data.id}</p>
        <p>Data: {data.data}</p>
      </div>
    </div>
  );
}
