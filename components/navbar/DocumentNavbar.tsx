"use client"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { downloadFile } from "@/lib/dowload-file"
import { handlePrint } from "@/lib/print"
import { useEditorStore } from "@/store/use-editor"
import { Edit, FileIcon, FilePlus2, Printer, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const DocumentNavbar = () => {
  const { editor } = useEditorStore()
  const onSaveJSON = () => {
    const json = editor?.getJSON()
    const jsonString = JSON.stringify(json, null, 2)
    downloadFile(jsonString, "document.json", "application/json") // Download as a JSON file
  }
  const onSaveHTML = () => {
    const html = editor?.getHTML() ?? ""
    downloadFile(html, "document.html", "text/html") // Download as a JSON file
  }

  return (
    <div className="flex print:hidden items-center">
      <Link href={"/"}>
        <Image width={60} height={60} alt="Logo" src={"/logo.svg"} />
      </Link>
      <div>
        asdf
        <Menubar className="bg-transparent border-0 p-0 shadow-none">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>
                  <FileIcon size={16} className="text-muted-foreground mr-1" />{" "}
                  Save
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem onClick={onSaveJSON}>JSON</MenubarItem>
                  <MenubarItem onClick={onSaveHTML}>HTML</MenubarItem>
                  <MenubarItem onClick={handlePrint}>PDF</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <FilePlus2 /> New Document
              </MenubarItem>
              <MenubarItem>
                <Edit /> Rename
              </MenubarItem>
              <MenubarItem>
                <Trash /> Remove
              </MenubarItem>
              <MenubarItem onClick={handlePrint}>
                <Printer /> Print <MenubarShortcut>⌘ P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Copy <MenubarShortcut>⌘ C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Paste <MenubarShortcut>⌘ V</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Undo
                <MenubarShortcut>
                  <MenubarShortcut>⌘ Z</MenubarShortcut>
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⌘ Y</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Format</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Bold <MenubarShortcut>⌘ B</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Italicize <MenubarShortcut>⌘ I</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Underline
                <MenubarShortcut>
                  <MenubarShortcut>⌘ U</MenubarShortcut>
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Strikethrough <MenubarShortcut>⌘ shift S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  )
}

export default DocumentNavbar
