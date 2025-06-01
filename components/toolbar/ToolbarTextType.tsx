import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEditorStore } from "@/store/use-editor"
import { Level } from "@tiptap/extension-heading"

const ToolbarTextType = () => {
  const { editor } = useEditorStore()
  const handleToggleTextType = (value: string) => {
    try {
      const level = Number(value)
      if (level === 0) {
        editor?.commands.setParagraph()
      } else {
        editor?.commands.setHeading({ level: level as Level })
      }
    } catch (error) {
      console.log("🚀 ~ handleToggleTextType ~ error:", error)
    }
  }

  const getCurrentTextType = () => {
    if (editor?.isActive("heading", { level: 1 })) return "1"
    if (editor?.isActive("heading", { level: 2 })) return "2"
    if (editor?.isActive("heading", { level: 3 })) return "3"
    return "0"
  }

  return (
    <Select value={getCurrentTextType()} onValueChange={handleToggleTextType}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Normal Text" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">Normal text</SelectItem>
        <SelectItem className="font-semibold text-2xl" value={"1"}>
          Heading 1
        </SelectItem>
        <SelectItem className="font-semibold text-xl" value="2">
          Heading 2
        </SelectItem>
        <SelectItem className="font-semibold text-lg" value="3">
          Heading 3
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
export default ToolbarTextType
