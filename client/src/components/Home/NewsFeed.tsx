import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import AppLink from '../common/AppLink'
import NewsSample from './NewsSample'

import { News } from '../../types'
import { useErrorHandler } from 'react-error-boundary'

export default function NewsFeed() {
  const [newsList, setNews] = useState<News[]>([])
  const handleError = useErrorHandler()

  async function fetchLatestNews() {
    try {
      const news: News[] = await (await axios.get('/api/v1/news/latest')).data.news
      setNews(news)
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    fetchLatestNews()
  }, [])

  return (
    <section className='g--section '>
      <Wrapper className='g--section-centered'>
        <AppLink title='Новости' to='/news' />
        <div className='news-container'>
          {newsList.length ? (
            newsList.map((news, index) => (
              <NewsSample title={news.title} text={news.body} id={news._id} key={index} />
            ))
          ) : (
            <h4>Ой, новости куда-то девались</h4>
          )}
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
