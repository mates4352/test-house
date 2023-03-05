import React, { FC } from 'react';
import * as S from '../lib/styles/Select-search-styles';
import { useSelectSearch } from '../lib/hooks/useSelectSearch';

type SelectSearchType = {
  arrayTest?: any;
  title: string;
  onCallbackCheckedInput: (text: string) => void;
  onSearchInput: (text: string) => void;
};

export const SelectSearch: FC<SelectSearchType> = ({
  arrayTest,
  title,
  onSearchInput,
  onCallbackCheckedInput,
  ...props
}) => {
  const [isPopup, refSelectSearch, onChangeStatePopup, onCheckedInput] =
    useSelectSearch(onCallbackCheckedInput);

  return (
    <S.SelectSearch
      ref={refSelectSearch}
      {...props}>
      <S.ButtonMainSelect
        isActive={isPopup}
        onCallback={onChangeStatePopup}>
        {title}
      </S.ButtonMainSelect>

      <S.WrapAnimation isAnimation={isPopup}>
        <S.Popup>
          <S.WrapInput>
            <S.Input
              placeholder={'Район'}
              onCallback={onSearchInput}
            />
          </S.WrapInput>

          <S.List>
            {arrayTest.map((el: any) => (
              <S.Item key={el.id}>
                <S.InputCheckbox
                  el={el}
                  onCallBack={onCheckedInput}
                />
              </S.Item>
            ))}
          </S.List>
        </S.Popup>
      </S.WrapAnimation>
    </S.SelectSearch>
  );
};
