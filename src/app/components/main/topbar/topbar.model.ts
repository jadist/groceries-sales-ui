export const enum HomeBackEnum {
  HOME = 'home',
  BACK = 'arrow_back',
}

export interface ToolbarInputModel {
  ToolbarTitle: string;
  HomeAction: {
    HomeBack: string;
    Destination: string[];
  };
  Notification: {
    Hidden: boolean;
    Content?: {
      Icon?: string;
      Name: string;
      Value: string;
      Description?: string;
    }[];
  };
}
