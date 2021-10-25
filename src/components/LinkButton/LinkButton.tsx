import { FC } from "react";
import s from "./LinkButton.module.css"
import cn from "classnames"

type Props = {
  linkText: string
  linkOn?: string
}

const LinkButton: FC<Props> = (props) => {
  return (
    <div className={cn(s.link__text, {[s.passive]: !props.linkOn})}>
      {props.linkText}
    </div>
  )
}

export default LinkButton