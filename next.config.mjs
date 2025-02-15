/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // images: {
  //   domains: [
  //     "localhost",
  //     "img.freepik.com",
  //     "res.cloudinary.com",
  //     "lh3.googleusercontent.com",
  //     "etimg.etb2bimg.com",
  //     "images.deccanherald.com",
  //     "cdn.downtoearth.org.in",
  //     "static.toiimg.com",
  //     "i.ytimg.com",
  //     "akm-img-a-in.tosshub.com",
  //     "www.biospectrumindia.com",
  //     "images.moneycontrol.com",
  //     "www.hindustantimes.com",
  //     "media.assettype.com",
  //     "images.livemint.com",
  //     "www.europeanscientist.com",
  //     "cdn.thewire.in",
  //     "bl-i.thgim.com",
  //     "resize.indiatvnews.com",
  //     "i0.wp.com",
  //     "www.gavi.org",
  //     "images.news18.com",
  //     "scx2.b-cdn.net",
  //     "media.springernature.com",
  //     "cdn.sanity.io",
  //     "www.theweek.in",
  //     "c.ndtvimg.com",
  //     "d2jx2rerrg6sh3.cloudfront.net",
  //     'static.india.com',
  //     'st1.thehealthsite.com',
  //     'images.healthshots.com',
  //     'static.businessworld.in',
  //     'cdn.ndtv.com',
  //     'cdn.mos.cms.futurecdn.net',
  //     'www.sciencealert.com',
  //     's.yimg.com',
  //     'img.buzzfeed.com',
  //     'www.thebrighterside.news',
  //     'www.washingtonpost.com',
  //     'mediaproxy.salon.com',
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'http',
        hostname: '*',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      }
    ],
  },
};

export default nextConfig;
