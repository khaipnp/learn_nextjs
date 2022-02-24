import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Header from '../../components/header'

export default function DetailNews() {
  const [category, setCategory] = useState('GIẢI TRÍ')
  const [title, setTitle] = useState('Vợ chồng David Beckham bị chỉ trích vì bộ ảnh của con trai')
  const [author, setAuthor] = useState('Tuệ Lâm')
  const [timePost, setTimePost] = useState('')
  const [desc, setDesc] = useState(
    'Khán giả phản ứng về việc vợ chồng David Beckham để con trai Cruz chụp hình theo phong cách nổi loạn và xăm mình khi chưa đủ tuổi quy định'
  )
  const [descImg, setDescImg] = useState(
    'Vợ chồng Beckham bị chỉ trích vì chia sẻ ảnh chụp theo phong cách nổi loạn của con trai.'
  )
  const [content, setContent] = useState(
    'Ngày 22/2, vợ chồng Beckham đã chia sẻ ảnh chụp cho tạp chí i-D của con trai Cruz Beckham lên trang cá nhân. Cặp vợ chồng nổi tiếng đăng tổng cộng 13 bức ảnh với chú thích: “Ngày đầu tiên của tuổi 17 thật tuyệt vời. Mẹ tự hào về con". <br />Tuy nhiên, sau khi đăng tải loạt ảnh của con trai, Vic-Becks đã vấp phải làn sóng chỉ trích từ khán giả. Nhiều người cho rằng hình ảnh nổi loạn trong bộ ảnh không phù hợp với Cruz. Cậu nhuộm tóc hồng, cởi trần và mặc quần cạp trễ lộ viền nội y. Một số ảnh, Cruz thậm chí chỉ mặc đồ lót.'
  )

  useEffect(() => {
    setTimePost(new Date().toLocaleDateString())
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <strong>{category}</strong>
            <h1 className="text-3xl font-bold pt-2">{title}</h1>
            <ul className='the-article-meta'>
                <li></li>
            </ul>
            <div className="mt-3">
              <span>{author}</span> - <span>{timePost}</span>
            </div>
            <div className="content mt-2">
              <h6 className="font-bold">{desc}</h6>
              <p>{content}</p>
              <div>
                <Image
                  loading="lazy"
                  src={'/img/Cruz_Beckham_q_1645503379.jpeg'}
                  width={400}
                  height={400}
                  className="border-gray-600 border-solid rounded"
                  placeholder={descImg}
                  alt=""
                />
                <p>{descImg}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
