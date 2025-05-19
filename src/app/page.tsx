'use client';
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import TasksTable from "@/components/Tasks/Tasks";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') return <></>;

  if (status === 'authenticated') {
    return (
      <div className={styles.page}>
        <Sidebar />
        <TasksTable />
      </div>
    );
  }
}