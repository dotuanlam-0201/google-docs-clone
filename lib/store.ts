import { Editor } from "@tiptap/core";
import { create } from "zustand";

interface IEditorStoreState {
  editor?: Editor
}
interface IEditorAction {

}

export const useEditorStore = create<IEditorStoreState & IEditorAction>((set) => ({
  editor: undefined,

}))