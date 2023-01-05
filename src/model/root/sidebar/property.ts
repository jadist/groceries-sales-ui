export interface PropertyModel {
  version: {
    '1': string;
  };
  title: string;
  description: string;
  urlParamName: string;
  data: {
    sub_title: string;
    sub_desc: string;
    urlParamValue: string;
  }[];
}
