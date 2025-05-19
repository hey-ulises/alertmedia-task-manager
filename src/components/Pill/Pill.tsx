import styles from "./pill.module.css";

function Pill({
    text,
    status
}: {
    text: string,
    status: string,
}) {
  return (
    <div className={`${styles['pill']} ${styles[status]}`}>
        {text}     
    </div>
  )
}

export default Pill;