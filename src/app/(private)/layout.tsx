import { LayoutProps } from "@/types/LayoutProps";
import styles from "@/styles/Layout.module.scss";
import AuthGuard from "@/components/AuthGuard";

export default function PrivateLayout({ children }: LayoutProps) {
  return (
    <main className={styles.main}>
      <AuthGuard authKey="userObject">{children}</AuthGuard>
    </main>
  );
}
