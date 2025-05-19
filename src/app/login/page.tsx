'use client';
import Image from "next/image";
import styles from "./login.module.css";
import { useActionState } from "react";
import { authenticate } from "../lib/actions";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div className={styles['login-page']}>
            <div className={styles['login-logo']}>
                <Image
                    src="https://www.alertmedia.com/wp-content/themes/alertmedia/assets/dist/img/AlertMedia-Logo.svg"
                    alt="AlertMedia logo"
                    fill
                    priority
                />
            </div>
            <form action={formAction} className={styles['login-form']}>
                <input
                    className={styles['login-input']}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    className={styles['login-input']}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                />
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <button
                    className={styles['login-btn']}
                    aria-disabled={isPending}  
                >
                    LOG IN
                </button>
                {errorMessage && (
                    <>
                        <p>{errorMessage}</p>
                    </>
                )}
            </form>
        </div>
    )
}

export default LoginPage;