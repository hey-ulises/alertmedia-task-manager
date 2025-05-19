import { useEffect, useState } from "react";
import { Notes, NotesListSchema } from "@/types/Notes";

export function useNotes(taskId: string) {
    const [notes, setNotes] = useState<Notes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      if (!taskId) return;

      setLoading(true);
      fetch(`http://localhost:3001/task_notes?task_id=${taskId}`)
      .then(res => res.json())
      .then(data => {
        const parsed = NotesListSchema.safeParse(data);
        if (!parsed.success) {
            throw new Error("Invalid notes data format");
        }
        
        setNotes(parsed.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
    }, [taskId])
    
    return { notes, loading, error };
}