import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useEditorStore } from "@/store/use-editor"
import { Link } from "lucide-react"
import { ChangeEvent, useState } from "react"

const ToolbarLink = () => {
  const { editor } = useEditorStore()
  const [link, setLink] = useState(editor?.getAttributes("link").href ?? "")
  const isActive = editor?.isActive("link")
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)
  }
  const onApply = () => {
    try {
      if (link === "") {
        editor?.chain().focus().extendMarkRange("link").unsetLink().run()
        return
      } else {
        editor
          ?.chain()
          .focus()
          .extendMarkRange("link")
          .setLink({ href: link })
          .run()
      }
    } catch (error) {
      console.log("🚀 ~ onApply ~ error:", error)
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"sm"} variant={"ghost"}>
          <Link />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex items-center gap-2 ">
        <Input
          value={link}
          onChange={handleInputChange}
          placeholder="https://google.com"
        />
        <Button onClick={onApply}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToolbarLink
