import { type HeroBenefit } from "../../utils/contentTypes";

interface HeroBenefitProps {
  benefit: HeroBenefit;
}

export default function HeroBenefit({ benefit }) {
  return <li>Benefit</li>;
}
