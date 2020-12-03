declare interface Theme {
  errorTextColor: string;
  successTextColor: string;
  linkTextColor: string;
  textColor: string;
  labelTextColor: string;
  backgroundColor: string;
  containerBackgroundColor: string;
  textBackgroundColor: string;
  successButtonBackground: string;
  buttonColor: string;
  emphasizedTextColor: string;
  verySmallBoxShadow: string;
  smallBoxShadow: string;
  boxShadow: string;
}

interface NavigatorID {
  userAgent: string;
}

interface Document {
  userAgent: string;
  window: any;
}
