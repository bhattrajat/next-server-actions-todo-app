"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

const createTodo = async (todoName: string) => {
  await prisma.todo.create({ data: { name: todoName } });
  revalidatePath("/");
};

export default createTodo;
