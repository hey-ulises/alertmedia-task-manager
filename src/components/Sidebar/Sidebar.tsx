import Image from "next/image";
import styles from "./sidebar.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Sidebar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const items = [
        {
            title: 'Profile',
            action: () => {

            }
        },
        {
            title: 'Backlog',
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
            <div className={styles['sidebar-toggle']}>
                <Image
                    aria-hidden
                    src="/menu.svg"
                    alt="Toggle sidebar"
                    onClick={e => setOpen(!open)}
                    fill
                />
            </div>
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