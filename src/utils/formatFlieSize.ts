export default function formatFileSize(size: number): string {
  if (size < 1024) {
    return `${size} B`;
  } else if (size < 1024 * 1024) {
    const kbSize = (size / 1024).toFixed(2);
    return `${kbSize} KB`;
  } else {
    const mbSize = (size / (1024 * 1024)).toFixed(2);
    return `${mbSize} MB`;
  }
}
