export const downloadFile = (content: string, filename: string, type: string) => {
  // Create a Blob with the content and the specified MIME type
  const blob = new Blob([content], { type });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);
  // Create a temporary anchor element
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  // Append the anchor to the document, trigger a click, and clean up
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke the URL to release memory
  URL.revokeObjectURL(url);
};