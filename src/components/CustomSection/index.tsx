import { CustomSectionProps } from "@/types/CustomSection";
import styles from '@/styles/Layout.module.scss'

export function CustomSection({ children , className }: CustomSectionProps) {
  return <section className={ styles.section + ' ' + className}>{children}</section>;
}
