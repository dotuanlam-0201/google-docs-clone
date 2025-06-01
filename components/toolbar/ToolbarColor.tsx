import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useEditorStore } from "@/store/use-editor"
import { SketchPicker } from "react-color"

const ToolbarColor = () => {
  const { editor } = useEditorStore()
  const onSelectColor = (color: string) => {
    if (!editor?.can().setColor) return
    editor.chain().focus().setColor(color).run()
  }
  const selectedColor = editor?.getAttributes("textStyle").color ?? "#000"
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={"sm"}
          variant={"ghost"}
          style={{ borderColor: selectedColor }}
          className={cn("border-b-4 ")}
        >
          A
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker
          color={selectedColor}
          onChange={({ hex }) => onSelectColor(hex)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToolbarColor
