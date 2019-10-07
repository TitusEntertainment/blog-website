import React from 'react';
import me from '../assets/pictures/wedding_photo.jpg';
import '../scss/_homePage.scss';

const data = {
  title: 'Wow',
  description: "Wow that's a great story",
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rem recusandae consequuntur illum iure consequatur debitis eos praesentium perferendis quo. Repellendus, voluptatem. Adipisci pariatur et corporis non, dignissimos unde cumque?',
  image: 'https://triplet-assets.s3.amazonaws.com/typescript.jpg',
  id: 'wow',
  date: 'October 6 2019',
};

function HomePage() {
  return (
    <div className='Home_article'>
      <h1 id='header-articles'>Latest articles and blog posts</h1>

      <div id='articles'>
        <div class='article'>
          <img key={data.id} src={data.image} alt={data.title} />
          <div id='article-text'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p id='date'>{data.date}</p>
          </div>
        </div>

        <div id='about-me'>
          <img src={me} alt='me' />
          <p id='picture-date'>02/08/2019 me and my cousins at a wedding</p>
          <p id='about-me-synopsis'>
            I'm currently a student based in Stockholm, Sweden and I'm studying technology. The course includes web
            design, web programming and "normal" programming (java). I love using the many of thousands of npm
            libraries/packages out there to make fun and usefull web based applications and discord bots!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
