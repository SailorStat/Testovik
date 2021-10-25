import { FC } from "react"
import PageTitle from "../../loc/titles/PageTitle"
import s from "./QuestionsList.module.css"


const QuestionsList: FC = () => {
  return (
    <div className={s.list__wrapper}>
      <div className="list__header">
        <PageTitle pageTitle="Questions list"/>
      </div>
      
    </div>
  )
}

export default QuestionsList