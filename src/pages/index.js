import React from "react";
import { Link, graphql } from 'gatsby';

const randomMe = () => {
  var avatar = [
    {url: 'assets/me1.png'},
    {url: 'assets/me2.jpg'},
  ];
  var randomIndex = Math.floor(Math.random() * avatar.length - 1) + 1;
  var imageSource = avatar[randomIndex].url;
  return imageSource;
};

const getYoTreat = () => {
  var randomVideos = [
    {title: "Libby's 1990 Vienna Sausage Commercial", url: 'https://www.youtube.com/watch?v=8BGnEzAasl0'},
    {title: "Old Spam Commercial w/ Jingle", url: 'https://www.youtube.com/watch?v=gLRPJEoQBQQ'},
    {title: "Armour's 1985 Vienna Sausage Commercial", url: 'https://www.youtube.com/watch?v=uEuBZRAX_5k'},
    {title: "Canned Vienna Sausages Throw Down (Armour vs. Prairie Belt)", url: 'https://www.youtube.com/watch?v=pSj5fDjw3zQ'},
    {title: "Canned Beef Stew Throw Down (Dinty Moore vs. Southgate vs. Lion Gate)", url: 'https://www.youtube.com/watch?v=oO4eR51HLfc'},
    {title: "Spaghetti-O Jello Mold Retro Recipe w/ Vienna Sausages", url: 'https://www.youtube.com/watch?v=2jJg0LgMH9Y'},
    {title: "Cincinnati Chili Throw Down (Skyline vs. Gold Star Chili)", url: 'https://www.youtube.com/watch?v=uoZxyCrQzxo'},
    {title: "Cincinnati Chili Spaghetti & Coney Dog (Skyline vs. Gold Star)", url: 'https://www.youtube.com/watch?v=4lsnnpQaSuM'},
    {title: "Skyline 3 Way Chili Spaghetti", url: 'https://www.youtube.com/watch?v=-EVGT_83xJg'},
    {title: "Hot Dog with Spicy Meat Sauce Recipe", url: 'https://www.youtube.com/watch?v=4aDZ0yT5agM'},
    {title: "Dinty Moore's 1990 Ad", url: 'https://www.youtube.com/watch?v=ky33W2QQjWo'},
    {title: "Dinty Moore's 1994 Ad", url: 'https://www.youtube.com/watch?v=VJdaKA7b0jY'},
    {title: "Pork Brains & Eggs", url: 'https://www.youtube.com/watch?v=h9KWgp8Jmpw'},
  ];
  var randomIndex = Math.floor(Math.random() * randomVideos.length - 1) + 1;
  var treatSelector = document.querySelector('.treat');
  treatSelector.href=randomVideos[randomIndex].url;
}

const randomWeekendCrap = () => {
  var randomWeekendActivities = [
    {title: "knit & crochet", url: 'https://www.instagram.com/p/BtHSfozg1Mh/'},
    {title: "do hot process soap-making", url: 'https://www.instagram.com/p/BarKC8EDo87/'},
    {title: "make candles", url: 'https://www.instagram.com/p/BuzWNQ6HVc_/'},
    {title: "casually hike", url: 'https://www.instagram.com/p/3W7XSuAalJ/'},
    {title: "do tissue art in random bathrooms", url: 'https://www.instagram.com/p/BPdeWcJBJT3/'},
    {title: "organize my Carmex collection", url: 'https://www.instagram.com/p/BYFXAugDQ3i/'},
    {title: "work on my secret business plan", url: 'https://www.instagram.com/p/BzIlG0-pwyy/'},
    {title: "bake short bread", url: 'https://www.instagram.com/p/Bsn3AMSg9NX/'},
    {title: "rewatch Bob's Burgers", url: 'https://getyarn.io/yarn-clip/c5df929a-9ae0-4cdc-b398-df41a211d2c1'},
  ];
  var weekendSelector = document.querySelector('.weekend');
  var randomWeekendIndex = Math.floor(Math.random() * randomWeekendActivities.length - 1) + 1;
  weekendSelector.href = randomWeekendActivities[randomWeekendIndex].url;
}

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <div className="media-object">
        <img src={randomMe()} alt="Me doing things." className="avatar"/>
        <h1>Kaixo!</h1>
        <p>I <Link to='/categories/code' title='Technical posts.'>code</Link> some <Link to='/tags' title='All post categories.'>things</Link>, <Link to='/categories/design' title='Design related posts.'>design</Link> sometimes, write about random <a href="http://thehustlebabe.com" target="_blank">financial endeavors</a>, and I <a href="#" className="weekend" target="_blank" onClick={randomWeekendCrap}>do random stuff</a> on the weekends.</p>
        <p>On <a href="https://twitter.com/themcsuth/" target="_blank" title="Twitter.">social</a> media I'm pretty dead.</p>
        <p>- "<a href="https://www.linkedin.com/in/seimith/" target="_blank" title="Reach out to me on LinkedIn for work-related inquiries.">Smith</a>"</p>
      </div>
      <div className="special-treat">
        🍭 Here's a <a href="#" className="treat" target="_blank" onClick={getYoTreat}>video</a>.
      </div>
    </div>
  )
};

export const query = graphql`
  query HompageQuery {
    allMarkdownRemark(
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`

export default Layout;
