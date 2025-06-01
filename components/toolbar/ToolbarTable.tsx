import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEditorStore } from "@/store/use-editor"
import { Table } from "lucide-react"
import { GridSelect } from "react-grid-select"

const ToolbarTable = () => {
  const { editor } = useEditorStore()
  const handleSelect = ({
    width,
    height,
  }: {
    width: number
    height: number
  }) => {
    if (width < 2 && height < 2) return
    editor
      ?.chain()
      .focus()
      .insertTable({ rows: width, cols: height, withHeaderRow: true })
      .run()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <Table />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <GridSelect
          styles={{
            grid: { margin: 0 },
          }}
          cols={10}
          rows={10}
          onRegionUpdate={handleSelect}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToolbarTable
