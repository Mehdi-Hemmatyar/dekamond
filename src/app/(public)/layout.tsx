import { LayoutProps } from "@/types/LayoutProps";
import styles from '@/styles/Layout.module.scss'

export default function PublicLayout ({children } : LayoutProps){


    return (
        <main className={styles.main}>
            {children}
        </main>
    )
} 