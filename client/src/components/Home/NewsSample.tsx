export default function NewsSample({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div>
        <span className='g--date-text'>11.05.2022</span>
        <span className='g--dot-text'>&#183;</span>
        <span className='g--author-text'>admin</span>
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}
