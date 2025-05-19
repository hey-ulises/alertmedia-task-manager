import Image from "next/image";
import styles from "./sidebar.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Sidebar() {
    const [open, setOpen] = useState(true);
    const router = useRouter();

    const items = [
        {
            title: 'My Tasks',
            action: () => {

            }
        },
        {
            title: 'All Tasks',
            action: () => {
                
            }
        },
        {
            title: 'Log out',
            action: () => {
                router.push('/login');
            }
        }
    ];

    return (
        <div className={open ? styles['sidebar'] : styles['sidebar-close']}>
            <Image
                className={styles['sidebar-toggle']}
                aria-hidden
                src="/menu.svg"
                alt="Toggle sidebar"
                width={24}
                height={24}
                onClick={e => setOpen(!open)}
            />
            {open && (
                <div className={styles['sidebar-items']}>
                    {items.map(item => (
                        <div
                            key={item.title}
                            className={styles['sidebar-item']}
                            onClick={item.action}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Sidebar;