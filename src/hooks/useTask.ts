import { useEffect, useState } from "react";
import { Task } from "@/types/Task";

export function useTask(id: string) {
    const [task, setTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      if (!id) return;

      setLoading(true);
      
      fetch(`http://localhost:3001/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        setTask(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Unknown error");
        setLoading(false);
      })
    }, [id]);
    
    return { task, loading, error };
}