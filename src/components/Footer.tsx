import React from 'react'
import config from '@/config'
import Link from 'next/link'
// import Script from 'next/script'
// import { HiEye, HiUserGroup } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-16 mb-6 text-sm">
      <div className="mt-2 space-x-2 text-gray-600">
        <a
          className="hover:underline"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noreferrer"
        >
          粤ICP备2021055259号-1
        </a>
        <span>•</span>
        <span>
          &copy;{new Date().getFullYear()}&nbsp;{config.name}
        </span>
      </div>
    </div>
  )
}

export default Footer
