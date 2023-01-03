import {
  MdRadioButtonChecked,
  MdStarOutline,
  MdOutlineCheckBox,
  MdOutlineArrowDropDown,
  MdOutlineImage,
  MdPowerInput,
  MdOutlineSearch,
} from "react-icons/md";
import { TbBoxMargin, TbSwitchHorizontal, TbFile } from "react-icons/tb";
import { GiRank2 } from "react-icons/gi";
export const Items = [
  { title: "RadioGroup", icons: <MdRadioButtonChecked /> },
  { title: "Rating", icons: <MdOutlineImage /> },
  { title: "CheckBox", icons: <MdOutlineCheckBox /> },
  { title: "Dropdown", icons: <MdOutlineCheckBox /> },
  { title: "TagBox", icons: <TbBoxMargin /> },
  { title: "Boolean", icons: <TbSwitchHorizontal /> },
  { title: "File", icons: <TbFile /> },
  { title: "ImagePicker", icons: <MdOutlineImage /> },
  { title: "Ranking", icons: <GiRank2 /> },
];
export const Items2 = [
  { title: "Single-Choice Matrix", icons: <MdPowerInput /> },
  { title: "Multiple-Choice Matrix", icons: <MdPowerInput /> },
  { title: "Comment", icons: <MdPowerInput /> },
  { title: "Multiple Text", icons: <MdPowerInput /> },
  { title: "Dynamic Panel", icons: <MdPowerInput /> },
];
export const Items3 = [
  { title: "Html", icons: <MdPowerInput /> },
  { title: "Expression(read-only)", icons: <MdPowerInput /> },
  { title: "Image", icons: <MdPowerInput /> },
  { title: "Signature Pad", icons: <MdPowerInput /> },
];
