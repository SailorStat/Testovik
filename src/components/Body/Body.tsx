import { FC } from "react";
import Base from "../Base/Base";
import s from "./Body.module.css"


const Body: FC = () => {
  return (
    <div className={s.body}>
      <div className={s.bg}></div>
      <div className={s.body__content}>
        <Base />
      </div>
    </div>
    
  )
}

export default Body