export default function ContactsShort({ title, content }: { title: string; content: string }) {
  return (
    <p>
      <strong>{title}</strong>
      <br />
      <span>{content}</span>
    </p>
  )
}
