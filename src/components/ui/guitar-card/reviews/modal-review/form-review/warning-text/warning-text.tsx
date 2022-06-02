import React from 'react';

type WarningTextProps = {
  message?: string,
  className: string,
  isValid?: boolean,
};

function WarningText({message, className, isValid}: WarningTextProps): JSX.Element | null {
  if (isValid !== false) {
    return null;
  }

  return (
    <span
      className={className}
      data-testid="warning-text"
    >
      {message}
    </span>
  );
}

export default WarningText;
