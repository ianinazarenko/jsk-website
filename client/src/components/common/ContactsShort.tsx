import styled from 'styled-components'

export default function ContactsShort({
  title,
  phone,
  email,
}: {
  title: string
  phone?: string
  email?: string
}) {
  return (
    <Container>
      <strong>{title}</strong>
      {email && <a href={`mailto:${email}`}>{email}</a>}
      {phone && <a href={`tel:${phone}`}>{phone}</a>}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  row-gap: 0.25rem;
`
