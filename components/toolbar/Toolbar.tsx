"use client"

import ToolbarColor from "@/components/toolbar/ToolbarColor"
import ToolbarFont from "@/components/toolbar/ToolbarFont"
import ToolbarImage from "@/components/toolbar/ToolbarImage"
import ToolbarLink from "@/components/toolbar/ToolbarLink"
import ToolbarList from "@/components/toolbar/ToolbarList"
import ToolbarTable from "@/components/toolbar/ToolbarTable"
import ToolbarTextMarker from "@/components/toolbar/ToolbarTextMarker"
import ToolbarTextType from "@/components/toolbar/ToolbarTextType"
import { Separator } from "@/components/ui/separator"

const Toolbar = () => {
  return (
    <div className="flex print:hidden h-6 gap-1 items-center bg-transparent border-0">
      <ToolbarTextMarker />
      <Separator className="mx-4" orientation="vertical" />
      <ToolbarColor />
      <Separator className="mx-4" orientation="vertical" />
      <ToolbarTextType />
      <Separator className="mx-4" orientation="vertical" />
      <ToolbarFont />
      <Separator className="mx-4" orientation="vertical" />
      <ToolbarLink />
      <ToolbarImage />
      <ToolbarList />
      <ToolbarTable />
    </div>
  )
}

export default Toolbar
