import React from 'react';

import style from './Login.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

const Social = ({ onFacebookLogin }) => {
  return (
    <div>
      <div className={ css('fb-btn') } onClick={ onFacebookLogin }>Facebook</div>
    </div>
  );
};

export default Social;
