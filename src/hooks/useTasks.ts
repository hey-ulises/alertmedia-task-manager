import { useState, useEffect } from "react";
import { Task, TaskListSchema } from "@/types/Task";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => {
        const parsed = TaskListSchema.safeParse(data);
        if (!parsed.success) {
            throw new Error("Invalid task data format");
        }
        setTasks(parsed.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
    }, []);

    return { tasks, loading, error };
}