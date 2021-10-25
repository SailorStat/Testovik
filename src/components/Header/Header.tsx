import { FC } from "react";
import EventButton from "../../loc/buttons/EventButton/EventButton";
import Input from "../../loc/inputs/Input/Input";
import LinkButton from "../LinkButton/LinkButton";
import s from "./Header.module.css"


const Header: FC = () => {
  return (
    <div className={s.header__wrapper}>
      <div className={s.header__inner}>
        <h1 className={s.site__name}>Testovik</h1>
        <LinkButton linkText="Questions list" linkOn="#"/>
        <LinkButton linkText="Create new question" linkOn="#"/>
        <LinkButton linkText="Some disabled button"/>
      </div>
      <form action="" className={s.header__inner}>
        <Input placeholder="Search for questions.." />
        <EventButton placeholder="Search" activate={() => {}}/>
      </form>
    </div>
  )
}

export default Header