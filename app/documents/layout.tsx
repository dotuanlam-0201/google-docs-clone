import DocumentNavbar from "@/components/navbar/DocumentNavbar"
import Toolbar from "@/components/toolbar/Toolbar"
import { ReactNode } from "react"

const DocumentsPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F9FBFD] space-y-5 p-5">
      <DocumentNavbar />
      <Toolbar />
      {children}
    </div>
  )
}

export default DocumentsPageLayout
