import React from 'react';

type TabItemProps = {
  children: React.ReactElement,
  label: string,
};

function TabItem({children}: TabItemProps) {
  return children;
}

export default TabItem;
