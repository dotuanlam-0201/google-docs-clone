import Editor from "@/components/editor"

interface IDocumentPageProps {
  params: Promise<{ documentId: string }>
}

const DocumentPage = async ({ params }: IDocumentPageProps) => {
  const { documentId } = await params
  return (
    <div className="size-full min-h-screen overflow-x-auto px-0 print:p-0 p-4 print:bg-white print:overflow-visible ">
      <div className="flex flex-col mx-auto max-w-[800px]  print:w-full print:py-0">
        <Editor />
      </div>
    </div>
  )
}

export default DocumentPage
