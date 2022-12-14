/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import clients from '../../../data/mobile-app/clients.json';
import Secondclients from '../../../data/mobile-app/Secondclients.json';

const Clients = () => {
  return (
    <section className="clients-carsouel mt-100">
      <div className="container">
        <Swiper
          className="swiper-container"
          id="content-carousel-container-unq-6"
          spaceBetween={0}
          slidesPerView={5}
          loop={true}
          speed={1000}
        >
          {
            clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="item">
                  <a href="#0" className="img">
                    <div className="front">
                      <img height={80} width={80} src={client} alt="" />
                    </div>
                    <div className="back">
                      <img height={80} width={80} src={client} alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="line-head mb-0 mt-50">
          <h6>Дэлхий хаашаа чиглэж байна вэ?</h6>
        </div>
      </div>
    </section>
  )
}

export default Clients