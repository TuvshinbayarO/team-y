/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {

  const data = [
    {
      id: 1,
      image: "/img/testimonials/davaa.png",
      author: "Э. Даваахүү",
      position: "CEOO"
    },
    {
      id: 2,
      image: "/img/testimonials/anji.png",
      author: "Э. Анужин",
      position: "MS"
    },
    {
      id: 3,
      image: "img/testimonials/mendee.jpg",
      author: "Д. Мэнд-Амар",
      position: "ITS"
    },
    {
      id: 4,
      image: "img/testimonials/ashina.jpg",
      author: "Б. Ашина",
      position: "MS"
    },
    {
      id: 5,
      image: "img/testimonials/gundee.jpg",
      author: "Т. Гүндэгмаа",
      position: "MS"
    },
    {
      id: 6,
      image: "img/testimonials/Nomio.jpg",
      author: "Б. Номин",
      position: "MS"
    },
    {
      id: 7,
      image: "img/testimonials/nandia.jpg",
      author: "Э. Нандин-Эрдэнэ",
      position: "CCS"
    },
    {
      id: 8,
      image: "img/testimonials/tuvshoo.jpg",
      author: "О. Түвшинбаяр",
      position: "ITS"
    }
  ]

  return (
    <section data-scroll-index="3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-head text-center mb-80">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u gr-orange-text">Our Team</span>
              </h6>
              <h2>Team - Y</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="testim-grid">
        <div className="container box">
          <div>
            <Swiper
              id="content-carousel-container-unq-0" 
              className="swiper-container"
              spaceBetween={30}
              slidesPerView={3}
              // loop={true}
              // speed={1000}
              centeredSlides={true}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 1.5
                },
                1024: {
                  slidesPerView: 4
                }
              }}
            >
              {
                data.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="item">
                      <div className="cont flex">
                        <div className="img-flex valign">
                          <div className="img">
                            <img src={ item.image} alt="" className="circle-img" />
                          </div>
                        </div>
                        <div className="info valign ml-20">
                          <div>
                            <h6>{ item.author }</h6>
                            <span className="text-u ls1 fz-12">{ item.position }</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials