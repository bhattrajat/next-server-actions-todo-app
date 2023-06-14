import Image from "next/image";
import { Suspense } from "react";

import AddTodo from "@/components/add-todo";
import ThemeChanger from "@/components/theme-switcher";
import Todos from "@/components/todos";
import Skeleton from "@/components/ui/skeleton";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main>
      {/* When the theme is dark, hide this div */}
      <div className="absolute -z-10 dark:hidden">
        <Image
          className="h-48 w-screen"
          src="/bg-desktop-light.jpg"
          width={400}
          height={400}
          alt=""
        />
      </div>
      {/* When the theme is light, hide this div */}
      <div className="absolute -z-10 hidden dark:block">
        <Image
          className="hidden h-48 w-screen dark:block"
          src="/bg-desktop-dark.jpg"
          width={400}
          height={400}
          alt=""
        />
      </div>
      <ThemeChanger />
      <div className="mx-auto px-4 py-8 lg:max-w-xl">
        <h1 className="text-3xl font-bold text-white">Todo</h1>
        <AddTodo />
        <Suspense
          fallback={
            <Skeleton className="my-6 h-96 w-full rounded bg-slate-600 shadow lg:max-w-lg" />
          }
        >
          <Todos searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
