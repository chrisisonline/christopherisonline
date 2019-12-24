import { browserSizeUpdateAction, BrowserSize } from "../actions"
import { myTheme as theme } from "../../theme"

const initState = "lg" as BrowserSize

export default (state = initState, action: browserSizeUpdateAction) => {
  switch (action.type) {
    case 'BROWSERSIZE_UPDATE':
      if (action.payload <= theme.breakpoints.values.xs){
        return "xs"
      }else if (action.payload <= theme.breakpoints.values.sm)
        return "sm"
      else if (action.payload <= theme.breakpoints.values.md)
        return "md"
      else if (action.payload <= theme.breakpoints.values.lg)
        return "lg"
      else
        return "xl"
    default:
      return state
  }
}