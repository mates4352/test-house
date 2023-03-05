import { StatusPopup } from '../../../utils/enum/status/status-popup';

export type StatusPopupType =
  | StatusPopup.POPUP_DELETE_MODERATION
  | StatusPopup.POPUP_DELETE_PERSON
  | StatusPopup.POPUP_DELETE_STATUS
  | null;
