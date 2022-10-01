/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="section-padding sub-bg pb-0" data-scroll-index="5">
      <div className="download-app">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 valign">
              <div className="cont pb-80">
                <div className="fz-12 ls2 text-u mb-10">
                  {/* <span className="gr-orange-text">Download Monpay App</span> */}
                </div>
                <h2 className="mb-20 fw-500">Анхаарал хандуулсанд баярлалаа</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 d-flex align-items-end">
              <div className="img">
                {/* <img src="mobile-app/img/2.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="md-center md-mb30">
                <a href="#0" className="logo">
                  <p>TEAM - Y</p>
                </a>
              </div>
            </div>
            
            <div className="col-lg-3 d-flex justify-content-end">
              <div className="copyrights">
                {/* <p className="fz-14">Made By <a href="#0" className="gr-orange-text">UI-ThemeZ</a></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur"></div>
    </footer>
  )
}

export default Footer