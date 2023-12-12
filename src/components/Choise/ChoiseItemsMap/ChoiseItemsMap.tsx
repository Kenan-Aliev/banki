import React from 'react';
import ChoiseItem from '@/components/Choise/ChoiseItem/ChoiseItem';

type ItemT = {
  name: string;
  active: boolean;
  href?: string;
  id?: number
};
type Props = {
  choiseItems?: ItemT[];
  setActive?: React.Dispatch<React.SetStateAction<string | number>>;
  currentChoise?: string | number;
};

const ChoiseItemsMap = ({ choiseItems, currentChoise, setActive }: Props) => {
  const isActive = (name: string | null, id: number | null) => {
    if (id) {
      return id === Number(currentChoise)
    }
    return name.toLowerCase() === String(currentChoise).toLowerCase()
  }
  return (
    <>
      {choiseItems?.map((el, index) => (
        <ChoiseItem
          name={el.name}
          active={isActive(el.name, el.id ?? null)}
          key={index}
          setActive={setActive}
          href={el.href}
          id={el.id}
        />
      ))}
    </>
  );
};

export default ChoiseItemsMap;
