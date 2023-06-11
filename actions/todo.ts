"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

export const createTodo = async (todoName: string) => {
  await prisma.todo.create({ data: { name: todoName } });
  revalidatePath("/");
};

export const completeTodo = async (id: number) => {
  await prisma.todo.update({ where: { id }, data: { isCompleted: true } });
  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
};
