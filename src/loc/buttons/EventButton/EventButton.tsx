import { FC } from "react"
import s from "./EventButton.module.css"

type Props = {
  placeholder: string
  activate: () => void
}

const EventButton: FC<Props> = (props) => {
  return (
    <div className={s.button} onClick={props.activate}>{props.placeholder}</div>
  )
}

export default EventButton