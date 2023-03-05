import styled from 'styled-components';
import { ListNews } from '../../../../statics/list-news';
import { CustomButtonPlus } from '../../../../actions/custom-button-plus';

const AdminListNews = styled.div``;

const ButtonEditNews = styled(CustomButtonPlus)`
  margin-bottom: 48px;
`;

const List = styled(ListNews)`
  margin-bottom: 32px;
`;

export { AdminListNews, ButtonEditNews, List };
