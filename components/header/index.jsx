import React, { Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {
  const listMenu = ['Xuất bản', 'Thời sự', 'Thế giới', 'Kinh doanh', 'Công nghệ']
  const [avatar, setAvatar] = useState('/img/Cruz_Beckham_q_1645503379.jpeg')
  const [userName, setUserName] = useState('khaipnp')

  const handleOnClickAvatar = () => {
    return (
      <div className="relative w-200 h-150 bg-white shadow-md">
        <input type="text" />
        <button>Log out</button>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="container mx-auto bg-white relative h-52 px-4 border-b border-gray-200">
        <div className="flex flex-row justify-between">
          <h1 className={styles.logo}>
            <Link href={'/'}>
              <a title="Zing News - Thông tin uy tín, hình ảnh ấn tượng"></a>
            </Link>
            <span>Tri thức trực tuyến</span>
          </h1>
          <nav>
            <ul className="flex flex-row">
              {listMenu.map((menu, index) => {
                return (
                  <li key={index} className="p-3">
                    {menu}
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="user-box flex flex-row">
            <Link href={'/'} passHref>
              <strong>{userName}</strong>
            </Link>
            <Image
              height={40}
              width={40}
              className="rounded-full cursor-pointer"
              src={avatar}
              alt="avatar"
              onClick={handleOnClickAvatar}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
