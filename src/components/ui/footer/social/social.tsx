import React from 'react';

import SocialItem from './social-item/social-item';

type SocialItemProps = {
  name: string,
  path: string,
};

const socialList = [
  {
    name: 'facebook',
    path: 'https://www.facebook.com/',
  },
  {
    name: 'instagram',
    path: 'https://www.instagram.com/',
  },
  {
    name: 'twitter',
    path: 'https://twitter.com/',
  },
];

const getSocialItem = ({name, path}: SocialItemProps) =>(
  <SocialItem
    key={name}
    label={name}
    currentLink={path}
  />
);

function Social(): JSX.Element {
  return (
    <div
      className="socials footer__socials"
      data-testid="social"
    >
      <ul className="socials__list">
        {socialList.map(getSocialItem)}
      </ul>
    </div>
  );
}

export default Social;
