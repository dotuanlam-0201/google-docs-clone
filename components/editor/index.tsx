"use client"

import { Threads } from "@/components/thread"
import { HEADING_LEVEL } from "@/lib/constant/editor"
import { useEditorStore } from "@/store/use-editor"
import {
  FloatingToolbar,
  useLiveblocksExtension,
} from "@liveblocks/react-tiptap"
import Blockquote from "@tiptap/extension-blockquote"
import { Color } from "@tiptap/extension-color"
import Document from "@tiptap/extension-document"
import FontFamily from "@tiptap/extension-font-family"
import Gapcursor from "@tiptap/extension-gapcursor"
import Heading from "@tiptap/extension-heading"
import HorizontalRule from "@tiptap/extension-horizontal-rule"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import OrderedList from "@tiptap/extension-ordered-list"
import Paragraph from "@tiptap/extension-paragraph"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import Text from "@tiptap/extension-text"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Underline from "@tiptap/extension-underline"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import "./index.css"

export default () => {
  const liveblocks = useLiveblocksExtension()
  const { setEditor } = useEditorStore()
  const editor = useEditor({
    onCreate(props) {
      setEditor(props.editor)
    },
    onSelectionUpdate(props) {
      setEditor(props.editor)
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false,
      }),
      Document,
      Paragraph,
      Text,
      StarterKit,
      TaskList,
      Heading.configure({
        levels: HEADING_LEVEL,
      }),
      TaskItem.configure({
        nested: true,
      }),
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      HorizontalRule,
      Blockquote,
      Underline,
      Color,
      TextStyle,
      FontFamily.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
      OrderedList,
    ],
    editorProps: {
      attributes: {
        class:
          "focus:outline-none print:border-0 bg-white min-h-[1000px] w-full py-10 px-15 border-1 cursor-text" as string,
      },
    },
    immediatelyRender: false,
  })
  if (!editor) return null

  return (
    <div>
      <EditorContent editor={editor} className="editor" />
      <Threads editor={editor} />
      <FloatingToolbar editor={editor} />
    </div>
  )
}
