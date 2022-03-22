import './LandingPage.css';
import { Brands, Footer,Benefits, Testimonials, Partners, Navigation,Need, Cover } from '..';
const LandingPage = () => {
  return (
      <>
    <Navigation/>
    <Cover/>
    <svg style={ {
    position: 'relative',
    background:'#f7f9ff',
    marginBottom:'-6em'
}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 90"><path fill="#ffff" 
      fill-opacity="1" d="M 0 100 L 400 0 L 800 100 "></path></svg>
    <svg style={ {
    position: 'relative',
    top: '1em'
}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100"><path fill="#f9fafe" 
      fill-opacity="1" d="M 0 100 L 400 0 L 800 100 "></path></svg>
    <Need/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100"><path fill="#f9fafe" 
      fill-opacity="1" d="M 0 0 L 400 100 L 800 0 "></path></svg>
    <Benefits/>
    <Partners/>
    <Testimonials/>
    <Brands/>
    <Footer/>
</>
  )
}

export default LandingPage