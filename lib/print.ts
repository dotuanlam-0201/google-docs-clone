import { isFunction } from "lodash"

export const handlePrint = () => {
  if (window && isFunction(window.print)) return window.print()
  return () => { }
}