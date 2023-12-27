import css from "./languageDropDown.module.css"

export interface LanguageValues {
  id: number
  label: JSX.Element
}

export const languageDropDown = [
  {
    id: 1,
    label: (
      <div className={css.dropDownWrapper}>
        <img src="https://img.icons8.com/color/48/slovakia.png" />
        <h1>Slovak</h1>
      </div>
    ),
  },
  {
    id: 2,
    label: (
      <div className={css.dropDownWrapper}>
        <img src="https://img.icons8.com/color/48/great-britain.png" />
        <h1>English</h1>
      </div>
    ),
  },
]
