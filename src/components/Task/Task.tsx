import styles from "./task.module.css";
import Pill from "../Pill/Pill";

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
            <span
                className={styles['task-priority']}
            >
                <Pill text={priority} status={priority.toLowerCase()} />
            </span>
            <span
                className={styles['task-status']}
            > {completed ? 
                <Pill text="Completed" status={'done'} /> :
                <Pill text="To do" status={'to-do'} />}
            </span>
            <span className={styles['task-date']}>{date_created}</span>
        </div>
    )
}

export default TaskRow;