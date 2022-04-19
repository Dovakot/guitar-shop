import React from 'react';

type SvgIconProps = {
  icon: {
    id: string;
    width: number;
    height: number;
  },
  className?: string,
};

function SvgIcon({
  icon: {id, width, height},
  className,
}: SvgIconProps): JSX.Element {
  const linkHref = `#${id}`;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
    >
      <use xlinkHref={linkHref} />
    </svg>
  );
}

export default SvgIcon;
