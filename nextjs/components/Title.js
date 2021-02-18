import React from 'react';
import Image from 'next/image';

import styles from '../styles/Title.module.scss';

function Title(props) {
  const { text } = props;

  return (
    <div className={styles.title}>
      <span className={styles['title-text']}>{text}</span>
      <a
        className={styles['title-github']}
        aria-label="Source code"
        href="https://github.com/dstanich/simple-user-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/GitHub-Mark-Light-32px.png"
          alt=""
          width="32"
          height="32"
        />
      </a>
    </div>
  );
}

export default Title;
