import { SomeDataComponent } from "./components/SomeDataComponent";
import { getSomeData } from "./actions";
import {
  dehydrate,
  QueryClient,
  HydrationBoundary,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["some-data"],
    queryFn: getSomeData,
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <SomeDataComponent />
        </HydrationBoundary>
      </main>
    </div>
  );
}
