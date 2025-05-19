import styles from "./sidepanel.module.css";
import { useGlobalContext } from "@/context/GlobalContext";
import { useTask } from "@/hooks/useTask";
import { useNotes } from "@/hooks/useNotes";
import Pill from "../Pill/Pill";

function Sidepanel() {
    const { selectedTask, setSelectedTask, isSidePanelOpen, setIsSidePanelOpen } = useGlobalContext();
    const { task, loading, error } = useTask(selectedTask);
    const { notes } = useNotes(selectedTask);

    const handleClose = () => {
        setIsSidePanelOpen(false);
        setSelectedTask(null);
    }

    if (!isSidePanelOpen) return <></>;

    return (
        <div className={styles['panel']}>
            <span
                className={styles['close']}
                onClick={handleClose}
            >
                X
            </span>

            <h2 className={styles['panel-title']}>{task?.title}</h2>

            <div className={styles['panel-data']}>
                <span className={styles['panel-data-title']}>Assignee</span>
            </div>
            <div className={styles['panel-data']}>
                <span className={styles['panel-data-title']}>Date created</span>
                <span className={styles['panel-data-info']}>{task?.date_created}</span>
            </div>
            <div className={styles['panel-data']}>
                <span className={styles['panel-data-title']}>Priority</span>
                <span className={styles['panel-data-info']}>
                    <Pill text={task?.priority || ""} status={task?.priority.toLowerCase() || ""} />
                </span>
            </div>
            <div className={styles['panel-data']}>
                <span className={styles['panel-data-title']}>Status</span>
                <span className={styles['panel-data-info']}>
                    <Pill text={task?.completed ? "Completed" : "To do"} status={task?.completed ? "done" : "to-do"} />
                </span>
            </div>
            <div className={styles['panel-data']}>
                <span className={styles['panel-data-title']}>Details</span>
                <span className={styles['panel-data-info']}>
                    {task?.details}
                </span>
            </div>

            <h3>Notes</h3>
            {notes.map(note => (
                <p>
                    {note.notes}
                </p>
            ))}
        </div>
    )
}

export default Sidepanel;