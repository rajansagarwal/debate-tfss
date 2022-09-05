import styles from './Hero.module.scss';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Hero(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  illustration: string,
  subscribePlaceholder?: string,
  subscribeAction?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.subtitle}>{p.subtitle}</p>
        hey
      </div>
      <div><img className={styles.illustration} src="https://file.rajanagarwal.xyz/debateteam.png" /></div>
    </Section>
  );
}
