import { FC } from "react";
import { Route, Switch } from "react-router";
import QuestionsList from "../QuestionsList/QuestionsList";
import s from "./Base.module.css"


const Base: FC = () => {
  return (
    <div className={s.base}>
      <Switch>
        <Route key="question" path="/sadfa" component={() => {return <div>белиберда </ div>}} />
        <Route key="question" path="/" component={QuestionsList} />
      </Switch>
    </div>
    
  )
}

export default Base