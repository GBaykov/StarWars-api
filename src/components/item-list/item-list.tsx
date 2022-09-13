import React, { ReactChild } from "react";

import {
  IrandomPlanet,
  ITransfomedPerson,
  ITransfomedStarship
} from "../../types";

import "./item-list.css";

export interface IItemListProps {
  data: ITransfomedPerson[] | IrandomPlanet[] | ITransfomedStarship[];
  onItemSelected: (itemId: string | null) => void;
  children: (
    item: ITransfomedPerson | IrandomPlanet | ITransfomedStarship
  ) => ReactChild;
}

const ItemList = (props: IItemListProps) => {
  const { data, onItemSelected, children } = props;

  const items = data.map((item) => {
    const { itemId } = item;
    const label = children(item);

    return (
      <li
        className="list-group-item"
        key={itemId}
        onClick={() => onItemSelected(itemId)}>
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};
export default ItemList;
