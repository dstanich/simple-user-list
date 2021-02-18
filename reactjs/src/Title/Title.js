import React from 'react';
import Image from 'next/image';

import './Title.scss';
import github from './GitHub-Mark-Light-32px.png';

function Title(props) {
  const { text } = props;

  return (
    <div className="title">
      <span className="title-text">{text}</span>
      <a
        className="title-github"
        aria-label="Source code"
        href="https://github.com/dstanich/simple-user-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={github} alt="" />
      </a>
    </div>
  );
}

export default Title;
