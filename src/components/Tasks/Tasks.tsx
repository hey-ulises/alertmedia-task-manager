import { useTasks } from "@/hooks/useTasks";
import { Task } from "@/types/Task";
import { useState } from "react";
import paginate from "@/utils/paginate";
import styles from "./tasks.module.css";

import TaskRow from "../Task/Task";

function TasksTable() {
    const { tasks, loading, error } = useTasks();
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(search.toLowerCase())
    );
    
    const pageSize = 20;
    const totalPages = Math.ceil(filteredTasks.length / pageSize);
    const paginatedTasks: Task[] = paginate(filteredTasks, currentPage, pageSize);

    if (loading) return <></>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles['tasks']}>
            <input
                className={styles['tasks-search']}
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className={styles['tasks-table']}>
                {paginatedTasks.map((task, index) => (
                    <TaskRow
                        id={task.id}
                        title={task.title}
                        priority={task.priority}
                        completed={task.completed}
                        date_created={task.date_created}
                        key={index}
                    />
                ))}
                {paginatedTasks.length === 0 && (
                    <p className={styles['taks-empty-message']}>No tasks found</p>
                )}
            </div>
            <div className={styles['tasks-pagination']}>
                <button
                    className={styles['tasks-button']}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <button
                    className={styles['tasks-button']}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default TasksTable;