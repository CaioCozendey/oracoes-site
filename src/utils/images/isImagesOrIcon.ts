import { IconType } from "react-icons";

const isImageIcon = (icon: IconType | string): icon is string => {
  return typeof icon === 'string' &&
    (icon.startsWith('/') ||
      /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(icon));
};

export default isImageIcon;