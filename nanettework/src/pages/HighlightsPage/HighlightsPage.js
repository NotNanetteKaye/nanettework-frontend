// General Imports
import React from "react";
import './HighlightsPage.css';
import Footer from '../../components/Footer/Footer'


// 🤔: add motion to 'HEADINGS'
// 🤔: hyperlink elements of H3 to respective articles
const HighlightsPage = () => {
    return (
        <div className='aboutLayout'>
          <div className='headerWithTitleAbout'>
            <div className='headerTitle'>
              <h3 class='slideInLeft' style={{textShadow: '#0000003d 1px 0 10px', color: '#e7e7e7'}}>HIGHLIGHTS</h3>
            </div>
          </div>
          <div className='bio'>
            <div className='words'>
              <h2>2022</h2>
              <h3>August 6 2022: a day very special to me because I officially became the first person in my family to complete an American university! We were decked out or whatever during ceremony. ✨</h3>
              <h3>I recieved an award from the Texas Tech University recognizing my campus-wide efforts in advancing diversity, equity, and inclusion. Wreck 'em for life!</h3>
              <h3>I spent my senior year dedicating my thesis to the relationship between the immigration status and a child's well being. Publication details OTW!</h3>
              <h2>2021</h2>
              <h3>I had my first Oprah moment during the annual First Generation Week where I got to interview the TTU Honors College Dean!</h3>
              <h3>I co-lead LatinX/Hispanic Heritage Month alongside one of the best humans I met during my time at Texas Tech University. Check us out here :)) </h3>
              <h3>I was featured in a video during TTU's 2021 Women's Herstory Month. I love being a woman.</h3>
              <h2>2020</h2>
              <h3>When the coronies happened 😵‍💫. Nevertheless, I made sure celebrations of culture still continued - even if that meant for the entire experience to be online.</h3>
              <h2>20__</h2>
              <h3>Learned at a very young age the importance of excellence when I had my Serena Williams moment of being the MVP for my tennis team. </h3>
            </div>
          </div>
          <Footer />
        </div>
      );
}
 
export default HighlightsPage;