import { SidebarStyleEnum } from '../../../text/root/sidebar/style';
import { MainPanelSelectionEnum } from '../../../text/root/main-panel/style';

export interface PropertyModel {
  ToolbarTitle: string;
  UseSidebar: boolean;
  SidebarStyle: SidebarStyleEnum;
  MainPanelStyle: MainPanelSelectionEnum;
}
