import styles from "./task.module.css";

function TaskRow({ 
    id,
    title,
    priority,
    completed,
    date_created
}: { 
    id: string,
    title: string,
    priority: string,
    completed: boolean,
    date_created: string
}) {

    return (
        <div className={styles['task']}>
            <span className={styles['task-title']}>{id}. {title}</span>
            <span className={styles['task-priority']}>{priority}</span>
            <span className={styles['task-status']}>{completed ? <>Completed</> : <>To Do</>}</span>
            <span className={styles['task-date']}>{date_created}</span>
        </div>
    )
}

export default TaskRow;