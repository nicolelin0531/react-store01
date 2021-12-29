import React from "react";

class Header01 extends React.Component {
  render() {
    return (
      <header className="fs-l-header official-header">
        <div className="fs-l-header__contents">
          <div className="fs-l-header__lowerContainer">
            <div className="fs-l-header__lowerContainerWrap">
              <div className="fs-l-header__logo">
                <div className="fs-p-logo">
                  <a href="https://postgeneral.jp/">
                    <img
                      src="https://postgeneral01.itembox.design/item/postgeneral_logo.svg?t=20211228115800"
                      alt="postgeneral"
                      className="fs-p-logo__image"
                    />
                  </a>
                </div>
              </div>
              <div className="fs-p-headerNavBar">
                <nav
                  className="fs-p-headerNavigation"
                  id="fs_p_headerNavigation"
                >
                  <ul className="fs-p-headerNavigation__list">
                    <div className="fs-l-header__drawerOpener">
                      <label
                        htmlFor="fs_p_ctrlDrawer"
                        className="fs-p-drawerButton fs-p-drawerButton--open"
                      >
                        <img
                          src="https://postgeneral01.itembox.design/item/icon-hanburgermenu.svg?t=20211228115800"
                          id="open_btn"
                          alt=""
                        />
                        <img
                          src="https://postgeneral01.itembox.design/item/hbtn.svg?t=20211228115800"
                          id="close_btn"
                          alt=""
                        />
                      </label>
                    </div>
                    <a href="https://postgeneral.jp/f/shop" id="store-icon">
                      <img
                        src="https://postgeneral01.itembox.design/item/officialTop_icon_CART_02.svg?t=20211228115800"
                        alt=""
                      />
                    </a>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            name="ctrlDrawer"
            value=""
            id="fs_p_ctrlDrawer"
            className="fs-p-ctrlDrawer"
          />
          <div id="menu-container">
            <aside className="fs-p-drawer fs-l-sideArea">
              <div className="fs-p-drawer__buttonContainer">
                <label
                  htmlFor="fs_p_ctrlDrawer"
                  className="
                  fs-p-drawer__button
                  fs-p-drawerButton fs-p-drawerButton--close
                "
                >
                  <i className="fs-p-drawerButton__icon fs-icon--close"></i>
                  <span className="fs-p-drawerButton__label">close</span>
                </label>
              </div>
              <div className="fs-p-drawer__Container">
                <div className="fs-p-drawer__contents">
                  <div className="fs-p-drawer__contentWrap">
                    <ul>
                      <li>
                        <a href="#top">TOP</a>
                      </li>
                      <li>
                        <a href="#about">ABOUT</a>
                      </li>
                      <li>
                        <a href="#event">EVENT</a>
                      </li>
                      <li>
                        <a href="#media">MEDIA</a>
                      </li>
                      <li>
                        <a href="#information">INFORMATION</a>
                      </li>
                      <li>
                        <a href="https://postgeneral.jp/f/shop">ONLINE STORE</a>
                      </li>
                    </ul>
                    <ul className="fs-p-headerSnsLink">
                      <li className="fs-p-headerSnsLink__item">
                        <a
                          href="https://www.instagram.com/postgeneral_official/"
                          className="fs-p-headerSnsLink__item__icon"
                        >
                          <img
                            src="https://postgeneral01.itembox.design/item/sns_logo_IG_white.svg?t=20211228115800"
                            alt="instagram"
                          />
                        </a>
                      </li>
                      <li className="fs-p-headerSnsLink__item">
                        <a
                          href="https://www.facebook.com/postgeneral_official-103975364311051"
                          className="fs-p-headerSnsLink__item__icon"
                        >
                          <img
                            src="https://postgeneral01.itembox.design/item/sns_logo_FB_white.svg?t=20211228115800"
                            alt="facebook"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <div id="menu-mask"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header01;
