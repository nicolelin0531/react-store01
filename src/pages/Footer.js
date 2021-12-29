import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="fs-l-footer official-footer">
        <div className="fs-p-footerPageTop">
          <a
            href="https://postgeneral.jp/"
            className="fs-p-footerPageTop__link"
          >
            {" "}
            ページトップへ{" "}
          </a>
        </div>
        <div className="fs-l-footer__wrap">
          <div className="fs-l-footer__contents left">
            <div className="fs-l-footer__contentsUpper">
              <div className="fs-l-header__logo">
                <div className="fs-p-logo">
                  <a href="https://postgeneral.jp/">
                    <img
                      src="https://postgeneral01.itembox.design/item/logo_white.svg?t=20211228115800"
                      alt="postgeneral"
                      className="fs-p-logo__image"
                    />
                  </a>
                </div>
              </div>
              <ul className="fs-p-footerSnsLink">
                <li className="fs-p-footerSnsLink__item">
                  <a
                    href="https://www.instagram.com/postgeneral_official/"
                    className="fs-p-footerSnsLink__item__icon"
                  >
                    <img
                      src="https://postgeneral01.itembox.design/item/sns_logo_IG_white.svg?t=20211228115800"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li className="fs-p-footerSnsLink__item">
                  <a
                    href="https://www.facebook.com/postgeneral_official-103975364311051"
                    className="fs-p-footerSnsLink__item__icon"
                  >
                    <img
                      src="https://postgeneral01.itembox.design/item/sns_logo_FB_white.svg?t=20211228115800"
                      alt="facebook"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="fs-l-footer__contentsLower" id="information">
              <div className="company">
                <h2>COMPANY</h2>
                <p>
                  株式会社クレエ Creer Co.,ltd <br />
                  〒540-0013 大阪府大阪市中央区内久宝寺町3-4-4 文友社ビル4F
                  <br />
                  TEL.06-6809-1368
                </p>
              </div>
            </div>
          </div>
          <div className="fs-l-footer__contents right">
            <div className="fs-l-footer__contents left">
              <nav className="footerMenu">
                <ul>
                  <li>
                    <a href="https://postgeneral-overseasagent.com/">
                      OVERSEAS AGENT
                    </a>
                  </li>
                  <li>
                    <a href="https://postgeneral-overseasagent.com/">
                      - ENGLISH
                    </a>
                    <a href="https://postgeneral-overseasagent.com/chinese/">
                      - CHINESE
                    </a>
                  </li>
                  <li>
                    <a href="https://postgeneral.jp/p/search?keyword=">
                      PRODUCT
                    </a>
                  </li>
                  <li>DOWNLOAD</li>
                  <li>
                    <a href="https://postgeneral01.itembox.design/item/download/postgeneral_format.xlsx">
                      - 発注書
                    </a>
                       
                    <a
                      href="https://postgeneral01.itembox.design/item/download/postgeneral_zaiko.xlsx&#10;&#10;"
                    >
                      - 在庫表
                    </a>
                  </li>
                  <li>
                    <a href="https://postgeneral.jp/f/contact">CONTACT</a>
                  </li>
                  <li>
                    <a href="https://postgeneral.jp/f/shop">
                      <img
                        src="https://postgeneral01.itembox.design/item/officialFooter_icon_CART.svg?t=20211228115800"
                        alt=""
                      />
                      ONLINE STORE
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="web-catalog fs-l-footer__contents">
              <h2>WEB CATALOG</h2>
              <div>
                <a href="http://www.adjustbook.com/doc2/Index/show/us/1476/bk/15081">
                  <img
                    src="https://postgeneral01.itembox.design/item/officialTop_catalog01.png?t=20211228115800"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fs-p-footerCopyright">
          <p className="fs-p-footerCopyright__text">
            当サイトに掲載されているコンテンツ文書、画像、動画などを無断で複製、転載、第三者への譲渡などを行うことを固く禁止いたします。
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
