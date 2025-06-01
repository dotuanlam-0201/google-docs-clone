import { type Editor } from "@tiptap/react";
import { create } from "zustand";

interface IEditorStoreState {
  editor?: Editor
}
interface IEditorAction {
  setEditor: (editor: Editor) => void
}

export const useEditorStore = create<IEditorStoreState & IEditorAction>((set) => ({
  editor: undefined,
  setEditor(editor) {
    set({
      editor: editor
    })
  },
}))