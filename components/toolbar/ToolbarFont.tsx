import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FONTS_OPTIONS } from "@/lib/constant/editor"
import { useEditorStore } from "@/store/use-editor"
import { map } from "lodash"

const ToolbarFont = () => {
  const { editor } = useEditorStore()
  const onValueChange = (font: string) => {
    if (!editor?.can().focus) return
    editor.chain().focus().setFontFamily(font).run()
    editor.commands.setFontFamily(font)
  }
  const getSelectedValue = () => {
    let selectedFont = FONTS_OPTIONS[0].value
    FONTS_OPTIONS.forEach(({ value }) => {
      if (editor?.isActive("textStyle", { fontFamily: value }))
        selectedFont = value
    })
    return selectedFont
  }
  return (
    <Select value={getSelectedValue()} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Normal Text" />
      </SelectTrigger>
      <SelectContent>
        {map(FONTS_OPTIONS, ({ value, label }, i) => (
          <SelectItem style={{ fontFamily: value }} key={i} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ToolbarFont
