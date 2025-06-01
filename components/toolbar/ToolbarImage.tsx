import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useEditorStore } from "@/store/use-editor"
import { ImageIcon } from "lucide-react"
import { ChangeEvent, useState } from "react"

const ToolbarImage = () => {
  const { editor } = useEditorStore()
  const [link, setLink] = useState("")
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)
  }
  const onApply = () => {
    try {
      editor?.chain().focus().setImage({ src: link }).run()
    } catch (error) {
      console.log("🚀 ~ onApply ~ error:", error)
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"sm"} variant={"ghost"}>
          <ImageIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex gap-2">
        <Input onChange={handleInputChange} placeholder="Image URL" />
        <Button onClick={onApply}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToolbarImage
