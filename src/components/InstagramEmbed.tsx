'use client'
import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const instagramEmbedHTML = `
<blockquote
  class="instagram-media"
  data-instgrm-captioned
  data-instgrm-permalink="https://www.instagram.com/p/CNFn0Jth-Gi/?utm_source=ig_embed&amp;utm_campaign=loading"
  data-instgrm-version="14"
  style="
    background: #FFF;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    margin: 1px;
    max-width: 540px;
    min-width: 326px;
    padding: 0;
    width: 99.375%;
    width: -webkit-calc(100% - 2px);
    width: calc(100% - 2px);
  "
>
  <div style="padding: 16px;">
    <a
      href="https://www.instagram.com/p/CNFn0Jth-Gi/?utm_source=ig_embed&amp;utm_campaign=loading"
      style="
        background: #FFFFFF;
        line-height: 0;
        padding: 0 0;
        text-align: center;
        text-decoration: none;
        width: 100%;
      "
      target="_blank"
    >
      <div style="display: flex; flex-direction: row; align-items: center;">
        <div
          style="
            background-color: #F4F4F4;
            border-radius: 50%;
            flex-grow: 0;
            height: 40px;
            margin-right: 14px;
            width: 40px;
          "
        ></div>
        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
          <div
            style="
              background-color: #F4F4F4;
              border-radius: 4px;
              flex-grow: 0;
              height: 14px;
              margin-bottom: 6px;
              width: 100px;
            "
          ></div>
          <div
            style="
              background-color: #F4F4F4;
              border-radius: 4px;
              flex-grow: 0;
              height: 14px;
              width: 60px;
            "
          ></div>
        </div>
      </div>
      <div style="padding: 19% 0;"></div>
      <!-- ... rest of the code ... -->
    </a>
    <p
      style="
        color: #c9c8cd;
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 0;
        margin-top: 8px;
        overflow: hidden;
        padding: 8px 0 7px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
      "
    >
      <a
        href="https://www.instagram.com/p/CNFn0Jth-Gi/?utm_source=ig_embed&amp;utm_campaign=loading"
        style="
          color: #c9c8cd;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: normal;
          line-height: 17px;
          text-decoration: none;
        "
        target="_blank"
      >
        A post shared by @clubstampsuk
      </a>
    </p>
  </div>
</blockquote>
  `;


  return (
    <div className='md:w-[540px] w-[326px]'>
      <div dangerouslySetInnerHTML={{ __html: instagramEmbedHTML }} />
    </div>
  );
};

export default InstagramEmbed;
