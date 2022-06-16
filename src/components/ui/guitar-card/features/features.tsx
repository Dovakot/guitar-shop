import React from 'react';

import {GUITAR_TYPE_RU} from '../../../../const';

type FeaturesProps = {
  vendorCode: string,
  typeKey: string,
  stringCount: number,
};

function Features({vendorCode, typeKey, stringCount}: FeaturesProps): JSX.Element {
  const type = GUITAR_TYPE_RU[typeKey];

  return (
    <table className="tabs__table">
      <tbody>
        <tr className="tabs__table-row">
          <td className="tabs__title">Артикул:</td>
          <td className="tabs__value">
            {vendorCode}
          </td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Тип:</td>
          <td className="tabs__value">
            {type}
          </td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Количество струн:</td>
          <td className="tabs__value">
            {stringCount} струнная
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Features;
