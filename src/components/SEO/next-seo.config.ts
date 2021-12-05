import { NextSeoProps } from 'next-seo'
const SEO_DEFAULT = {
  title: 'Huyi - landing page Shop basic',
  description:
    'Nước hoa, dầu thơm, xịt phòng, xà phòng, sáp hương ... , chúng tôi có, bạn có muốn mua không ?',
  canonical: '',
  noindex: true,
  openGraph: {
    url: '',
    title: 'Huyi - landing page Shop basic',
    description:
      'Nước hoa, dầu thơm, xịt phòng, xà phòng, sáp hương ... , chúng tôi có, bạn có muốn mua không ?',
    images: [
      {
        url: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/261720658_589658288992240_5535357888975769331_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Jvj7QnN5rkgAX8DSA6g&_nc_ht=scontent.fvca1-3.fna&oh=63425aae8e3cccfb83dfb43918f4963e&oe=61AF4C28',
        width: 900,
        height: 400,
        alt: 'home'
      }
    ],
    locale: 'vi',
    site_name: 'Trang chủ'
  }
} as NextSeoProps

export default SEO_DEFAULT
