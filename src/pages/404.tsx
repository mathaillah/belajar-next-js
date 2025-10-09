import type { NextPage } from 'next';
import styles from '@/styles/404.module.scss';

const Custom404: NextPage = () => {
  return (
    <div className={styles.error}>
      <img 
        src="/not_found.png" 
        alt="404" //10/10/25
        className={styles.image} 
      />
      <div>Halaman Tidak ditemukan</div>
    </div>
  );
};

export default Custom404;   