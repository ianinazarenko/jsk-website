import styled from 'styled-components'
import AppLink from '../common/AppLink'
import NewsSample from './NewsSample'

const newsSampleData = [
  {
    title: 'Модернизация системы управления отопления и горячего водоснабжения на 2 корпусе',
    text: 'В индивидуальном тепловом пункте ( ИТП) парадных 1,2,3,4 корпуса 2 завершены работы по модернизации щитов управления системой отопления и горячей воды (оборудование смонтировано). Начат процесс наладки...',
  },
  {
    title: 'Парадная №2: объявдение',
    text: '14 января в Парадной №2 возможны кратковременные отключения электнопитания в квартирах с 10.00 до 15.00 по причины производства работ в ГРЩ. \n Приносим извинения за доставленные неудобства',
  },
  // {
  //   title:
  //     '14 ЯНВАРЯ В ПАРАДНОЙ № 2 ВОЗМОЖНЫ КРАТКОВРЕМЕННЫЕ ОТКЛЮЧЕНИЯ ЭЛЕКТРОПИТАНИЯ В КВАРТИРАХ С 10.00 ДО 15.00 ПО ПРИЧИНЕ ПРОИЗВОДСТВА РАБОТ В ГРЩ',
  //   text: 'Приносим извинения за доставленные неудобствва',
  // },
  // {
  //   title:
  //     '14 ЯНВАРЯ В ПАРАДНОЙ № 2 ВОЗМОЖНЫ КРАТКОВРЕМЕННЫЕ ОТКЛЮЧЕНИЯ ЭЛЕКТРОПИТАНИЯ В КВАРТИРАХ С 10.00 ДО 15.00 ПО ПРИЧИНЕ ПРОИЗВОДСТВА РАБОТ В ГРЩ',
  //   text: 'Приносим извинения за доставленные неудобствва',
  // },
]

export default function NewsFeed() {
  return (
    <section className='g--section '>
      <Wrapper className='g--section-centered'>
        <AppLink title='Новости' to='/news' />
        <div className='news-container'>
          {newsSampleData.map((news, index) => (
            <NewsSample title={news.title} text={news.text} key={index} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  .news-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
  @media (min-width: 1441px) {
    .news-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`
