import React from 'react';

import SvgIcon from '../../../svg-icon/svg-icon';

type SocialItemProps = {
  label: string;
  currentLink: string;
};

function SocialItem({label, currentLink}: SocialItemProps): JSX.Element {
  const iconOptions = {
    id: `icon-${label}`,
    width: 24,
    height: 24,
  };

  return (
    <li className="socials-item">
      <a
        className="socials__link"
        href={currentLink}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon className="socials__icon" icon={iconOptions} />
      </a>
    </li>
  );
}

export default SocialItem;
