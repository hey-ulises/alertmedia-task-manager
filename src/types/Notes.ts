import { z } from "zod";

export const NotesSchema = z.object({
    task_id: z.string(),
    person_id: z.string(),
    notes: z.string()
});

export const NotesListSchema = z.array(NotesSchema);

export type Notes = z.infer<typeof NotesSchema>;