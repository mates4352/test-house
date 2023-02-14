import React, {FC, useEffect} from 'react';
import * as S from "../lib/styles/Company-info-styles";
import * as G from "../../../../global-styled-components/global-styled-components";

type CompanyInfoType = {};

export const CompanyInfo: FC<CompanyInfoType> = ({}) => {

  useEffect(() => {

  }, [])

  return (
    <S.CompanyInfo>
      <G.Container>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut delectus, dignissimos dolorum ducimus
        ipsum libero magni, maiores nulla officia quam quas, qui quisquam suscipit veniam! Atque illum odio possimus.
        Accusamus accusantium aut culpa delectus, dolor doloremque doloribus ducimus eos ex exercitationem id illo
        mollitia nostrum, omnis porro quae reiciendis reprehenderit sapiente. Animi asperiores assumenda, culpa ducimus
        enim facilis, harum labore laudantium minus molestiae natus necessitatibus officiis, possimus tempora tempore.
        Animi cumque incidunt praesentium qui repellat temporibus. Aliquam atque cupiditate dolorem doloremque impedit
        labore, maiores odio repudiandae sed soluta! Amet cum deserunt ducimus iure, laudantium molestiae omnis quam
        sint soluta!
      </G.Container>
    </S.CompanyInfo>
  );
};
