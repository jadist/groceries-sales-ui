export interface PropertyModel {
  version: {
    '1': string;
  };
  data: {
    title: string;
    description: string;
    parent: {
      name: string;
      value: string;
    };
    content: {
      name: string;
      value: string;
    };
  }[];
}
