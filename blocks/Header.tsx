import styles from './Header.module.css';
import Button from '../components/Button';
import cx from '../utils/cx';

export default function Header(p: {
  id?: string,
  className?: string,
  title: string,
  action?: string,
  actionHref?: string,
  onActionClick?(): void,
}) {
  const id = p.id ?? 'top';

  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <header id={id} className={className}>
      <div className={styles.content}>
        <div>TFSS Debate 2023</div>
        <div className={styles.navRight}>
          <div>About</div>
          <div>Team</div>
          <div>Get Involved</div>
        </div>
      </div>
    </header>
  );
}
