"use client"

import ToolbarButton from "@/components/toolbar/ToolbarButton"
import { Separator } from "@/components/ui/separator"
import { handlePrint } from "@/lib/print"
import { useEditorStore } from "@/store/use-editor"
import { BoldIcon } from "@heroicons/react/20/solid"
import { Editor } from "@tiptap/core"
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Italic,
  Printer,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react"
import { useCallback, useMemo } from "react"

const ToolbarTextMarker = () => {
  const { editor } = useEditorStore()
  const buttonActives = {
    bold: editor?.isActive("bold"),
    italic: editor?.isActive("italic"),
    underline: editor?.isActive("underline"),
    alignLeft: editor?.isActive({ textAlign: "left" }),
    alignCenter: editor?.isActive({ textAlign: "center" }),
    alignRight: editor?.isActive({ textAlign: "right" }),
  }

  const command = useCallback(
    (fn: (editor: Editor) => void) => () => {
      if (editor) fn(editor)
    },
    [editor]
  )
  const buttons = useMemo(() => {
    return [
      {
        icon: Undo2,
        onClick: command(({ commands: { undo } }) => undo()),
      },
      {
        icon: Redo2,
        onClick: command(({ commands: { redo } }) => redo()),
      },
      {
        icon: Printer,
        onClick: () => handlePrint(),
      },
      {
        separator: true,
      },
      {
        icon: BoldIcon,
        onClick: command((e) => e.chain().focus().toggleBold().run()),
        active: buttonActives.bold,
      },
      {
        icon: Italic,
        onClick: command((e) => e.chain().focus().toggleItalic().run()),
        active: buttonActives.italic,
      },
      {
        icon: Underline,
        onClick: command((e) => e.chain().focus().toggleUnderline().run()),
        active: buttonActives.underline,
      },
      {
        icon: AlignLeft,
        onClick: command((e) => e.chain().focus().setTextAlign("left").run()),
        active: buttonActives.alignLeft,
      },
      {
        icon: AlignCenter,
        onClick: command((e) => e.chain().focus().setTextAlign("center").run()),
        active: buttonActives.alignCenter,
      },
      {
        icon: AlignRight,
        onClick: command((e) => e.chain().focus().setTextAlign("right").run()),
        active: buttonActives.alignRight,
      },
    ]
  }, [command, buttonActives])

  return buttons.map(({ icon, separator, onClick, active }, idx) =>
    separator ? (
      <Separator key={`sep-${idx}`} className="mx-4" orientation="vertical" />
    ) : (
      <ToolbarButton active={active} key={idx} icon={icon} onClick={onClick} />
    )
  )
}

export default ToolbarTextMarker
