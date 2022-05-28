import React, {ReactElement, Children, cloneElement, useState, useEffect} from 'react';

import {isActive} from '../../../../utils/utils';

import TabLink from './tab-link/tab-link';

type TabsProps = {
  id: number,
  children: JSX.Element[],
};

function Tabs({id, children}: TabsProps): JSX.Element {
  const tabItems = children.map((element: ReactElement) => element.props.label);

  const [defaultTab] = tabItems;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const onActiveTabChange = (currentTab: string) => setActiveTab(currentTab);

  const getTabLink = (label: string, index: number) => {
    const key = `tab-link-${index}`;

    return (
      <TabLink
        key={key}
        id={id}
        label={label}
        activeTab={activeTab}
        onActiveTabChange={onActiveTabChange}
      />
    );
  };

  const getActiveTabItem = (child: ReactElement) => {
    const isActiveTab = isActive(child.props.label, activeTab);

    return isActiveTab && cloneElement(child);
  };

  useEffect(() => () => setActiveTab(defaultTab), [defaultTab]);

  return (
    <div className="tabs">
      {tabItems.map(getTabLink)}

      <div className="tabs__content" id="characteristics">
        {Children.map(children, getActiveTabItem)}
      </div>
    </div>
  );
}

export default Tabs;
