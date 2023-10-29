import React, { useState } from 'react';
import "./App.css"
function App() {

 return (
 
<div>
  <div style={{display: 'none', transform: 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="page-loading-wrapper">
    <div className="page-loading-logo" style={{transform: 'translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}>
      <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62d5846597f84407ab28866f_logo-dark-bg.svg" loading="lazy" alt="Nas Studios logo" className="page-loading-logo-foreground" />
      <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="page-loading-logo-mask" />
      <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62d5846597f84407ab28866f_logo-dark-bg.svg" loading="lazy" data-w-id="6fb0baa7-0fc1-23ba-6395-ccc4178aee9c" alt="Nas Studios logo" className="page-loading-logo-bg" />
    </div>
  </div>
  <div className="page-wrapper">
    <header className="header">
      <a title="Logo" href="/" aria-current="page" className="logo w-inline-block">
        <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62d5846597f84407ab28866f_logo-dark-bg.svg" loading="lazy" data-w-id="5fae99a2-4845-e12c-aae0-6662bf630bf0" alt="Nas Studios logo" className="logo-img dark-bg" style={{willChange: 'opacity', opacity: 1}} />
        <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62d584653cbc395509a73403_logo-light-bg.svg" loading="lazy" data-w-id="5fae99a2-4845-e12c-aae0-6662bf630bf1" alt="Nas Studios logo" className="logo-img light-bg" style={{willChange: 'opacity', opacity: 0}} />
        <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62d58465a9fc87d8ef5e2e08_logo-yellow-bg.svg" loading="lazy" data-w-id="5fae99a2-4845-e12c-aae0-6662bf630bf2" alt="Nas Studios logo" className="logo-img yellow-bg" style={{willChange: 'opacity', opacity: 0}} />
        <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62d58465a9fc87d8ef5e2e08_logo-yellow-bg.svg" loading="lazy" data-w-id="5fae99a2-4845-e12c-aae0-6662bf630bf3" alt="Nas Studios logo" className="logo-img yellow-bg-menu" />
      </a>
      <div data-w-id="5fae99a2-4845-e12c-aae0-6662bf630bf4" className="menu-trigger" style={{willChange: 'filter', filter: 'invert(0%)'}}>
        <div className="menu-bar top" style={{transform: 'translate3d(0px, -0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
        <div className="menu-bar middle" style={{opacity: 1}} />
        <div className="menu-bar bottom" style={{transform: 'translate3d(0px, 0.5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
      </div>
      <nav className="menu h-full-mobile" style={{display: 'none'}}>
        <div className="menu-inner">
          <div className="nav-list text-large" style={{opacity: 0, transform: 'translate3d(0px, 20%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
            <a id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630bfb-bf630bee" href="/videos" className="nav-link w-inline-block">
              <div>Videos</div>
            </a>
            <a id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630bfe-bf630bee" href="/services" className="nav-link w-inline-block">
              <div>Services</div>
            </a>
            <a id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630c01-bf630bee" href="/team" className="nav-link w-inline-block">
              <div>Team</div>
            </a>
          </div>
          <div className="menu-footer">
            <div id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630c08-bf630bee" className="social-links in-menu" style={{opacity: 0, transform: 'translate3d(0px, 20%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <a id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630c09-bf630bee" href="https://www.youtube.com/channel/UCJsUvAqDzczYv2UpFmu4PcA" target="_blank" className="social-link">Youtube</a>
              <a id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630c0b-bf630bee" href="https://www.facebook.com/nasdaily/" target="_blank" className="social-link">Facebook</a>
              <a id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630c0d-bf630bee" href="https://www.instagram.com/nasdaily/" target="_blank" className="social-link">Instagram</a>
              <a id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630c0f-bf630bee" href="https://www.tiktok.com/@nasdaily" target="_blank" className="social-link">TikTok</a>
            </div>
            <div id="w-node-_5fae99a2-4845-e12c-aae0-6662bf630c13-bf630bee" className="cta-magnet-wrapper">
              <div className="circle-cta form-trigger" style={{opacity: 0, transform: 'translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}}>
                <div>
                  Get a<br />quote
                </div>
              </div>
            </div>
            <p className="menu-contact-info" style={{transform: 'translate3d(0px, 20%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}>
              Or email us at <a href="mailto:hello@nasdaily.com" className="text-color-light">hello@nasdaily.com</a>
            </p>
          </div>
        </div></nav>
    </header>
    <div data-w-id="56d40a08-e56f-48a6-de90-fc9af1762cad" className="sticky-wrapper">
      <div data-w-id="71daf899-f52b-733f-4c88-26f1994727af" className="bg-dark bg-observe">
        <section className="section home-hero h-full-mobile">
          <a href="#home-intro" title="next section" data-w-id="a952bc00-ea59-5289-25b2-905a44ce3e9a" className="play-trigger w-inline-block" style={{willChange: 'transform', transform: 'translate3d(-50%, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
            <div className="screen-reader pointer-events-none">This is some text inside of a div block.</div>
          </a>
          <div className="page-padding">
            <div className="container">
              <div className="home-hero-content">
                <h1 className="hero-headline text-huge no-margin">
                  It 's Time To Tell<br />
                  <span className="text-color-yellow">Your Story</span>
                  . 
                </h1>
                <div className="home-video-descriptions">
                </div>
              </div>
              <div data-w-id="cb221d54-445c-cdb9-c449-5ed902d29f24" className="home-video-progress">
                <div className="home-video-progress-inner" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(0.27474, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform'}} />
              </div>
            </div>
          </div>
          <div className="player-wrapper w-embed">
            <div className="video-bg-embed vimeo-embed hero-video horizontal" id="hero-video" data-id-horizontal={736490091} data-id-vertical={736665647} data-vimeo-initialized="true"><iframe src="https://player.vimeo.com/video/736490091?loop=1&background=1&quality=auto&app_id=122963" width={1280} height={720} frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" title="30 SEC HOR .mp4" data-ready="true" /></div>
          </div>
          <div className="bg-overlay" />
        </section>
      </div>
      <div className="home-sticky-play _01 pointer-events-none">
        <div className="home-sticky-play-inner" style={{willChange: 'transform', transform: 'translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
          <div className="home-play-circle" style={{willChange: 'transform', transform: 'translate3d(0vw, 0vh, 0px) scale3d(0.166667, 0.166667, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
        </div>
      </div>
      <div className="home-sticky-play _02 pointer-events-none">
        <div className="home-sticky-play-inner" style={{willChange: 'transform', transform: 'translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
          <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62bcc3473bf84a0a6650aaf6_icon-play.svg" loading="lazy" alt className="home-play-triangle _01" style={{willChange: 'opacity, transform', opacity: 1, transform: 'translate3d(0vw, 0vh, 0px) scale3d(0.1, 0.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
          <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62bcc3473bf84a0a6650aaf6_icon-play.svg" loading="lazy" alt className="home-play-triangle _02" style={{willChange: 'opacity, transform', opacity: 0, transform: 'translate3d(0vw, 0vh, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
          <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62bcc3473bf84a0a6650aaf6_icon-play.svg" loading="lazy" alt className="home-play-triangle _03" style={{willChange: 'transform, opacity', transform: 'translate3d(0vw, 0vh, 0px) scale3d(0.1, 0.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}} />
          <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62bcc3473bf84a0a6650aaf6_icon-play.svg" loading="lazy" alt className="home-play-triangle _04" style={{willChange: 'transform, opacity', transform: 'translate3d(0vw, 0vh, 0px) scale3d(0.1, 0.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}} />
        </div>
      </div>
      <div data-w-id="b353b64f-99fc-4a47-6541-1aa695bfa2d4" className="bg-light bg-observe fade-to">
        <section id="home-intro" data-w-id="fed6b307-3573-1818-4a92-4fd4a495f68a" className="section home-intro">
          <div className="page-padding full-height">
            <div className="container full-height">
              <div className="home-intro-wrapper" style={{willChange: 'opacity', opacity: 1}}>
                <h2 id="w-node-_0563f2fa-8efa-3f49-023c-406950f728f6-a9656d58" className="text-xlarge no-margin">We excel at storytelling.</h2>
                <p id="w-node-e4e87170-ccb9-71ad-b182-30421cfaf4ca-a9656d58" className="paragraph">Our unique storytelling style breaks down complex subjects into simple, meaningful, and shareable content.</p>
              </div>
              <div className="home-intro-team" style={{willChange: 'opacity', opacity: 1}}>
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cec8439e01c665cf196ab5_team-01.png" loading="lazy" alt className="team-img _01" style={{willChange: 'opacity, transform', opacity: 0, transform: 'translate3d(75%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cec843570f8c8a3821250e_team-02.png" loading="lazy" alt className="team-img _02" style={{willChange: 'opacity, transform', opacity: 0, transform: 'translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cec843fe1f82f3ab57d130_team-04.png" loading="lazy" alt className="team-img _03" style={{willChange: 'opacity, transform', opacity: 0, transform: 'translate3d(-25%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cec843bbcee83d9620bce8_team-03.png" loading="lazy" alt className="team-img _04" style={{willChange: 'opacity, transform', opacity: 0, transform: 'translate3d(-25%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cec843bbcee8833620bce9_team-05.png" loading="lazy" alt className="team-img _05" style={{willChange: 'opacity, transform', opacity: 0, transform: 'translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
              </div>
            </div>
          </div>
        </section>
        <div className="sticky-spacer half" />
        <div data-w-id="62f95b5d-bf34-6c21-fdab-4e9c0125a51f" className="sticky-wrapper">
          <section className="section min-journey">
            <div className="min-journey-content-wrapper _01" style={{willChange: 'opacity', opacity: 0}}>
              <p className="min-journey-desc text-medium no-margin">Our work has brought together a community of</p>
              <h2 data-after-interval={1000} data-start={0} data-end={59135552} data-increment={1000} data-duration={1500} data-after-increment={1} className="text-xlarge number-count-01 no-margin">59,135,552</h2>
              <p className="min-journey-desc text-medium">followers from all over the world in 17 languages</p>
            </div>
            <div className="min-journey-content-wrapper _02" style={{willChange: 'opacity', opacity: 0}}>
              <p className="no-margin">Total views:</p>
              <div data-after-interval={1000} data-start={0} data-end={20005271003} data-increment={1000} data-duration={1000} data-after-increment={1000} className="font-fatfrank text-big number-count-02">20,005,271,003</div>
              <p className="no-margin">(That 's 20 billion!)</p>
            </div>
          </section>
          <div className="sticky-spacer double" />
        </div>
        <div data-w-id="dce50be2-af97-9ae2-74ad-79968f3eba79" className="avatars-wrapper">
          <div data-trigger=".number-count-01" className="sticky-spacer trigger-number number-01" />
          <div className="avatars-sticky">
            <div className="avatars-container" style={{willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <div className="avatars-layer _01" style={{willChange: 'transform, opacity', transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}>
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc14c992526685ff2e_avatar-08.jpg" loading="lazy" alt className="avatar big _01" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c2d3c26dac9cf653a6_avatar-like.svg" loading="lazy" alt className="avatar big _02" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c20cf76122a98af648_avatar-love.svg" loading="lazy" alt className="avatar big _03" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bd669a7f098358e453_avatar-09.jpg" loading="lazy" alt className="avatar big _04" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc7e7378b3c2b5c205_avatar-06.jpg" loading="lazy" alt className="avatar big _05" />
              </div>
              <div className="avatars-layer _02" style={{willChange: 'transform, opacity', transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}>
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be0cf761dc388af5f8_avatar-12.jpg" loading="lazy" alt className="avatar medium _01" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bda01a8c98fe6068cb_avatar-04.jpg" loading="lazy" alt className="avatar medium _02" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bb1c546a6ad6822901_avatar-05.jpg" loading="lazy" alt className="avatar medium _03" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c2ff634a36f4419f88_avatar-youtube.svg" loading="lazy" alt className="avatar medium _04" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc669a7fcfb658e452_avatar-02.jpg" loading="lazy" alt className="avatar medium _05" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c2b7253a168c9dfb58_avatar-messenger.svg" loading="lazy" alt className="avatar medium _06" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be1c546a955e822904_avatar-10.jpg" loading="lazy" alt className="avatar medium _07" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bccf044826f8d64ecb_avatar-01.jpg" loading="lazy" alt className="avatar medium _08" />
              </div>
              <div className="avatars-layer _03" style={{willChange: 'transform, opacity', transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}>
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c28521ef0e90c45301_avatar-share.svg" loading="lazy" alt className="avatar small _01" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bce603991dfc8dd966_avatar-03.jpg" loading="lazy" alt className="avatar small _02" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bdb28bf9fc3f79c4bc_avatar-07.jpg" loading="lazy" alt className="avatar small _03" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be0cf76171af8af5f7_avatar-11.jpg" loading="lazy" alt className="avatar small _04" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc7e7378b3c2b5c205_avatar-06.jpg" loading="lazy" alt className="avatar small _05" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bb1c546a6ad6822901_avatar-05.jpg" loading="lazy" alt className="avatar small _06" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be1c546a955e822904_avatar-10.jpg" loading="lazy" alt className="avatar small _07" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c20cf76122a98af648_avatar-love.svg" loading="lazy" alt className="avatar small _08" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bda01a8c98fe6068cb_avatar-04.jpg" loading="lazy" alt className="avatar small _09" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be0cf761dc388af5f8_avatar-12.jpg" loading="lazy" alt className="avatar small _10" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c2d3c26dac9cf653a6_avatar-like.svg" loading="lazy" alt className="avatar small _11" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc669a7fcfb658e452_avatar-02.jpg" loading="lazy" alt className="avatar small _12" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be1c546a955e822904_avatar-10.jpg" loading="lazy" alt className="avatar small _13" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be0cf76171af8af5f7_avatar-11.jpg" loading="lazy" alt className="avatar small _14" />
              </div>
              <div className="avatars-layer _04" style={{willChange: 'transform', transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bd669a7f098358e453_avatar-09.jpg" loading="lazy" alt className="avatar tiny _01" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bda01a8c98fe6068cb_avatar-04.jpg" loading="lazy" alt className="avatar tiny _02" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc14c992526685ff2e_avatar-08.jpg" loading="lazy" alt className="avatar tiny _03" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c2b7253a168c9dfb58_avatar-messenger.svg" loading="lazy" alt className="avatar tiny _04" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc7e7378b3c2b5c205_avatar-06.jpg" loading="lazy" alt className="avatar tiny _05" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bdb28bf9fc3f79c4bc_avatar-07.jpg" loading="lazy" alt className="avatar tiny _06" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6be0cf761dc388af5f8_avatar-12.jpg" loading="lazy" alt className="avatar tiny _07" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bccf044826f8d64ecb_avatar-01.jpg" loading="lazy" alt className="avatar tiny _08" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bc669a7fcfb658e452_avatar-02.jpg" loading="lazy" alt className="avatar tiny _09" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c2d3c26dac9cf653a6_avatar-like.svg" loading="lazy" alt className="avatar tiny _10" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6bb1c546a6ad6822901_avatar-05.jpg" loading="lazy" alt className="avatar tiny _11" />
                <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62cde6c20cf76122a98af648_avatar-love.svg" loading="lazy" alt className="avatar tiny _12" />
              </div>
            </div>
          </div>
          <div data-trigger=".number-count-02" className="sticky-spacer trigger-number number-02" />
        </div>
      </div>
    </div>
    <div data-w-id="91587ad7-778c-1ba4-d069-6760ed0a1ab2" className="bg-yellow bg-observe fade-to" style={{willChange: 'background', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
      <section data-w-id="d937bffe-aac3-9485-7c11-5a70aa1ab420" className="section testimonials-section">
        <div className="testimonials-header">
          <div className="page-padding">
            <div className="container">
              <div className="testimonial-header-grid">
                <div id="w-node-_0bfaebb0-685c-dccf-f959-af6fddc2a9c3-a9656d58" className="header-headline">
                  <div className="text-big">We are verified by a</div>
                  <div className="text-giga font-fatfrank">billion</div>
                  <div className="text-big">people</div>
                </div>
                <p id="w-node-fc3e35b6-f6ed-e773-3898-4536a6757cef-a9656d58" className="no-margin">Our videos have reached a billion people, from top global business leaders to everyday people from around the world.</p>
                <div id="w-node-_91240406-9912-674e-1a02-a0d8c80353c2-a9656d58" className="testimonial-arrow-wrapper">
                  <img src="https://uploads-ssl.webflow.com/62bb7cb6f8dac077b03a6295/62bcc3473bf84a0a6650aaf6_icon-play.svg" loading="lazy" alt className="testimonial-arrow" />
                  <div className="testimonial-arrow-bg" style={{willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(0.02, 0.02, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-padding">
          <div className="container">
            <div className="w-dyn-list">
              <div role="list" className="testimonials-list w-dyn-items">
                <div role="listitem" className="testimonial-component w-dyn-item">
                  <div className="testimonial-inner">
                    <p id="w-node-_9e46be5d-d726-e27d-3800-644ba1fa7023-a9656d58" className="text-medium text-color-light">"Nas: thanks for sharing. You’ve been an inspiration to so many people. Your work is great!"- Facebook comment</p>
                    <div id="w-node-_152c6cbc-8f18-3416-0c8c-953ca75851db-a9656d58">
                      <div id="w-node-_9d236ec9-905a-b31e-49eb-c812413c774f-a9656d58" className="text-medium text-color-yellow">Mark Zuckerberg</div>
                      <div className="text-small text-color-yellow">Meta / Facebook</div>
                    </div>
                    <img alt loading="lazy" id="w-node-cec7c6e2-d58f-266d-925e-7d0972407971-a9656d58" src="https://uploads-ssl.webflow.com/62bde26749d11638b99a7487/62bde40cb8fa285ac239ce09_avatar-mark-zuckerberg.jpg" className="testimonial-avatar" />
                  </div>
                </div>
                <div role="listitem" className="testimonial-component w-dyn-item">
                  <div className="testimonial-inner">
                    <p id="w-node-_9e46be5d-d726-e27d-3800-644ba1fa7023-a9656d58" className="text-medium text-color-light">"Eliminating River Blindness in Niger is an incredible milestone. Thanks, Nas Daily, for shining a light on this story and the fight against neglected tropical diseases."- Facebook Post</p>
                    <div id="w-node-_152c6cbc-8f18-3416-0c8c-953ca75851db-a9656d58">
                      <div id="w-node-_9d236ec9-905a-b31e-49eb-c812413c774f-a9656d58" className="text-medium text-color-yellow">Bill Gates</div>
                      <div className="text-small text-color-yellow">Bill &amp;Melinda Gates Foundation</div>
                    </div>
                    <img alt loading="lazy" id="w-node-cec7c6e2-d58f-266d-925e-7d0972407971-a9656d58" src="https://uploads-ssl.webflow.com/62bde26749d11638b99a7487/62bde406d776ebc10e4789ba_avatar-bill-gates.jpg" className="testimonial-avatar" />
                  </div>
                </div>
                <div role="listitem" className="testimonial-component w-dyn-item">
                  <div className="testimonial-inner">
                    <p id="w-node-_9e46be5d-d726-e27d-3800-644ba1fa7023-a9656d58" className="text-medium text-color-light">"❤️ ❤️ ❤️ 🤲🏾"</p>
                    <div id="w-node-_152c6cbc-8f18-3416-0c8c-953ca75851db-a9656d58">
                      <div id="w-node-_9d236ec9-905a-b31e-49eb-c812413c774f-a9656d58" className="text-medium text-color-yellow">Khaby Lame</div>
                      <div className="text-small text-color-yellow">TikTok influencer</div>
                    </div>
                    <img alt loading="lazy" id="w-node-cec7c6e2-d58f-266d-925e-7d0972407971-a9656d58" src="https://uploads-ssl.webflow.com/62bde26749d11638b99a7487/62f4ed574f9c70e847e4c793_avatar-khaby-optimized.jpg" className="testimonial-avatar" />
                  </div>
                </div>
                <div role="listitem" className="testimonial-component w-dyn-item">
                  <div className="testimonial-inner">
                    <p id="w-node-_9e46be5d-d726-e27d-3800-644ba1fa7023-a9656d58" className="text-medium text-color-light">"We were very happy to work with Nas Studios. The team is extremely professional, they worked tirelessly to achieve the outcomes we desired. We were super impressed by their creativity and unique approach. The production was super high quality and our video got millions of views."</p>
                    <div id="w-node-_152c6cbc-8f18-3416-0c8c-953ca75851db-a9656d58">
                      <div id="w-node-_9d236ec9-905a-b31e-49eb-c812413c774f-a9656d58" className="text-medium text-color-yellow">Ofir Dvash</div>
                      <div className="text-small text-color-yellow">CEO of Bee-io Honey</div>
                    </div>
                    <img alt loading="lazy" id="w-node-cec7c6e2-d58f-266d-925e-7d0972407971-a9656d58" src="https://uploads-ssl.webflow.com/62bde26749d11638b99a7487/62f4f8e47222c61d43cd9b60_avatar-ofir-optimized.jpg" className="testimonial-avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>


 

    )
  }
  


export default App;
