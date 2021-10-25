import { FC } from "react"
import s from "./Input.module.css"

type Props = {
  placeholder: string
}

const Input: FC<Props> = (props) => {
  return (
    <input className={s.input} type="text" placeholder={props.placeholder}/>
  )
}

export default Input