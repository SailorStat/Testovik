import { FC } from "react"
import s from "./PageTitle.module.css"


type Props = {
  pageTitle: string
}

const PageTitle: FC<Props> = (props) => {
  return (
    <h2 className={s.page__title}>{props.pageTitle}</h2>
  )
} 

export default PageTitle