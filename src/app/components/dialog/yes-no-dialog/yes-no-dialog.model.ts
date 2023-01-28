export interface YesNoDialogModel {
  Title: string;
  Message: string;
  SecondMessage?: string;
  Button: {
    Yes: {
      Color: string;
      Name: string;
      Value: string;
    };
    No: {
      Hidden: boolean;
      Name: string;
      Value: string;
    };
  };
}

export enum YesNoDialogEnum {
  YES = 'YES',
  NO = 'NO',
}
