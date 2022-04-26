import styled from 'styled-components'
import AppLink from '../common/AppLink'
import NewsSample from './NewsSample'

const newsSampleData = [
  {
    title: 'Модернизация системы управления отопления и горячего водоснабжения на 2 корпусе',
    text: 'В индивидуальном тепловом пункте ( ИТП) парадных 1,2,3,4 корпуса 2 завершены работы по модернизации щитов управления системой отопления и горячей воды (оборудование смонтировано). Начат процесс наладки...',
  },
  {
    title:
      '14 ЯНВАРЯ В ПАРАДНОЙ № 2 ВОЗМОЖНЫ КРАТКОВРЕМЕННЫЕ ОТКЛЮЧЕНИЯ ЭЛЕКТРОПИТАНИЯ В КВАРТИРАХ С 10.00 ДО 15.00 ПО ПРИЧИНЕ ПРОИЗВОДСТВА РАБОТ В ГРЩ',
    text: 'Приносим извинения за доставленные неудобствва',
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
    <Wrapper className='g--section'>
      <AppLink title='Новости' to='/news' />
      <div className='news-container'>
        {newsSampleData.map((news, index) => (
          <NewsSample title={news.title} text={news.text} key={index} />
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .news-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
  @media (min-width: 960px) {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;

    .news-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`
