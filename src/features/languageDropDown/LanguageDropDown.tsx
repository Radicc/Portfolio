import Select from "react-dropdown-select"
import { languageDropDown, LanguageValues } from "./languageData"
import css from "./languageDropDown.module.css"

interface Props {
  values: LanguageValues[]
  setValues: (e: LanguageValues[]) => void
}

const LanguageDropDown = (props: Props) => {
  return (
    <div className={css.container}>
      <Select
        className="border-green-400"
        color="rgb(74 222 128 )"
        options={languageDropDown}
        labelField="label"
        valueField="id"
        values={props.values}
        searchable={false}
        onChange={(values) => props.setValues(values)}
      />
    </div>
  )
}

export default LanguageDropDown
