import styled from 'styled-components'

export default function ContactsShort({
  title,
  phone,
  email,
  align = 'left',
}: {
  title: string
  phone?: string
  email?: string
  align?: 'left' | 'right'
}) {
  return (
    <Container align={align}>
      <strong>{title}</strong>
      {email && (
        <a href={`mailto:${email}`} className='g--clickable-contact'>
          {email}
        </a>
      )}
      {phone && (
        <a href={`tel:${phone}`} className='g--clickable-contact'>
          {phone}
        </a>
      )}
    </Container>
  )
}

const Container = styled.div<{ align: string }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  row-gap: 0.5rem;
  text-align: ${(props) => props.align};
`
