import styles from "./not-found.module.css";
import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <div className={styles.ringTop} aria-hidden="true" />
        <div className={styles.ringBottom} aria-hidden="true" />

        <p className={styles.eyebrow}>404 / Page not found</p>
        <p className={styles.watermark} aria-hidden="true">
          404
        </p>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            This part of the system has not been built.
          </h1>
          <p className={styles.description}>
            The page may have moved, the address may be incomplete, or the
            resource is not available yet. Return to the evidence, the
            mechanism, or the site home.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryLink}>
              <Home className={styles.linkIcon} aria-hidden="true" />
              Return home
            </Link>
            <Link href="/how-it-works" className={styles.secondaryLink}>
              How it works
              <ArrowRight className={styles.linkIcon} aria-hidden="true" />
            </Link>
            <Link href="/evidence" className={styles.secondaryLink}>
              Evidence
              <FlaskConical className={styles.linkIcon} aria-hidden="true" />
            </Link>
          </div>
          <Link
            href="/resources"
            className="mt-8 inline-flex items-center gap-2 font-bold text-twt-sky-blue underline decoration-white/25 underline-offset-4 hover:text-twt-light-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-twt-sky-blue"
          >
            <BookOpen className={styles.resourcesIcon} aria-hidden="true" />
            Browse resources
          </Link>
        </div>
      </div>
    </main>
  );
}
