import React from 'react'
import Index from '../components/Splash'
import PostList, { PostListProps } from '../components/PostList'

export interface DefaultLayoutProps {
  posts: PostListProps['posts']
}

const DefaultLayout: React.FC<DefaultLayoutProps> = props => {
  const { posts } = props

  return (
    <>
      <Index />
      <div className="container min-h-screen">
        <PostList posts={posts} />
      </div>
    </>
  )
}

export default DefaultLayout
