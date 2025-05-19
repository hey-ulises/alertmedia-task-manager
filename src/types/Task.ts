import { z } from "zod";

export const TaskSchema = z.object({
    id: z.string(),
    title: z.string(),
    details: z.string().nullable(),
    completed: z.boolean(),
    priority: z.string(),
    date_created: z.string()
});

export const TaskListSchema = z.array(TaskSchema);

export type Task = z.infer<typeof TaskSchema>;