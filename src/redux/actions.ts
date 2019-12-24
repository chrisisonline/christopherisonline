import { BROWSERSIZE_UPDATE } from './actionTypes'

export type BrowserSize = "xs" | "sm" | "md" | "lg" | "xl" | number
export interface browserSizeUpdateAction {
  type: typeof BROWSERSIZE_UPDATE
  payload: BrowserSize
}

export const browserSizeUpdate = (browserSize: number) =>
  ( dispatch: any ) => {
    dispatch({
      type: 'BROWSERSIZE_UPDATE',
      payload: browserSize
    })
  }