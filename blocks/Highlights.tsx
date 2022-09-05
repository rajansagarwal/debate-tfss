import styles from './Highlights.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Highlights(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  background?: 'normal' | 'alternate',
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} background={p.background}>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <img src={"https://file.rajanagarwal.xyz/debateteam.png"} style={{ zIndex: 99, display: 'flex', flexDirection: 'column', height: '300px', width: '100%', objectFit: 'cover' }} />

    </Section>
  );
}
