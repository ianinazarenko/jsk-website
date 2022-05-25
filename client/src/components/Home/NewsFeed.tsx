import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import AppLink from '../common/AppLink'
import NewsSample from './NewsSample'

import { News } from '../../types'

export default function NewsFeed() {
  const [newsList, setNews] = useState<News[]>([])
  console.log('NewsFeed: render news feed')

  async function fetchLatestNews() {
    try {
      const news: News[] = await (await axios.get('/api/v1/news/latest')).data.news
      setNews(news)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('NewsFeed: fetch latest news')
    fetchLatestNews()
  }, [])

  // if (newsList.length) {
  return (
    <section className='g--section '>
      <Wrapper className='g--section-centered'>
        <AppLink title='Новости' to='/news' />
        <div className='news-container'>
          {newsList.length
            ? newsList.map((news, index) => (
                <NewsSample title={news.title} text={news.body} id={news.id} key={index} />
              ))
            : null}
        </div>
      </Wrapper>
    </section>
  )
  // }

  return null
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
