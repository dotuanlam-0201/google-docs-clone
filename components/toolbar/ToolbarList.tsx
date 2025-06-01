"use client"

import { Button } from "@/components/ui/button"
import { useEditorStore } from "@/store/use-editor"
import { ListBulletIcon } from "@heroicons/react/20/solid"
import { map } from "lodash"
import { ListOrdered } from "lucide-react"
import { Fragment } from "react"

const ToolbarList = () => {
  const { editor } = useEditorStore()

  const lists = [
    {
      active: editor?.isActive("orderedList"),
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
      icon: <ListOrdered />,
    },
    {
      active: editor?.isActive("bulletList"),
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
      icon: <ListBulletIcon />,
    },
    // {
    //   active: false,
    //   onClick: () =>
    //     editor
    //       ?.chain()
    //       .focus()
    //       .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
    //       .run(),
    //   icon: <Table />,
    // },
  ]

  return (
    <Fragment>
      {map(lists, ({ icon, onClick, active }, i) => (
        <Button
          size={"sm"}
          variant={active ? "default" : "ghost"}
          onClick={onClick}
          key={i}
        >
          {icon}
        </Button>
      ))}
    </Fragment>
  )
}

export default ToolbarList
