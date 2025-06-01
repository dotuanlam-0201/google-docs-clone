import { Button } from "@/components/ui/button"

const ToolbarButton = ({
  onClick,
  icon: Icon,
  active,
}: {
  onClick?: VoidFunction
  icon?: React.ElementType
  active?: boolean
}) => {
  return (
    <Button
      size={"sm"}
      onClick={onClick}
      variant={active ? "default" : "ghost"}
    >
      {Icon && <Icon />}
    </Button>
  )
}

export default ToolbarButton
