import { Footer, Header } from '../components/common'
import { Announcement, Hero, NewsFeed } from '../components/Home'

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Announcement />
      <NewsFeed />
      {/* <Footer /> */}
    </div>
  )
}
