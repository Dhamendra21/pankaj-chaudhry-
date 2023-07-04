import Nav from "./Nav"
import instagram from '../asset/icons8-instagram-48.png'
import facebook from '../asset/icons8-facebook-48.png'
// import Img from "../asset/profile.jpg"
function Home (){
    return(
        <div className="d-flex justify-content-center m-5 align-items-center flex-wrap " >
         <Nav/>
         <div className="text-start text " >
        <h1>पंकज चौधरी</h1>
        <p>पंकज चौधरी, प्रदेश कार्यसमिति सदस्य, भारतीय जनता पार्टी युवा मोर्चा छत्तीसगढ़</p>
        <div className="d-flex align-items-center ">
            {/* <img src={Img} className="profile" /> */}
            <div >
             <div className="my-3" >
             <img src={instagram} class="m-0 icon" alt=""/><a className="media m-3" target="_blank" href="https://instagram.com/mediapankaj09?igshid=MjEwN2IyYWYwYw==" >इंस्टाग्राम पर पोस्ट देखें </a>
             </div>
             <div className="my-3" >
             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="skyblue" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg> <a className="media ms-4" href="https://twitter.com/pankajc62780788/status/1675699566962958336?s=46&t=OXoFQjyDdakJFxo8P2eBHg" target="_blank" > ट्विट्स पढ़ें </a>
             </div>
             <div className="my-3" >
             <img src={facebook} class="m-0 icon" alt=""/>
         <a className="media m-2" href="https://www.facebook.com/pankaj.choudhari.37" > फेसबुक पर फॉलो करें </a>
             </div>
            </div>
        </div>
        <div>
            <p className="fw-normal" >
            सामान्य से गांव से निकलकर महाविद्यालय में पत्रकारिता की पढ़ाई के साथ अंकिल भारतीय विद्यार्थी परिषद के सहायक से छात्रों के अधिकार संघर्षरत रहें|
            जनसेवा को एकमात्र लक्ष्य मानकर राजनीती में भारतीय जनता पार्टी के सदस्य बनकर आमजन के सेवा में सदैव तत्पर |


            </p>
        </div>
        <div className="d-flex my-5 flex-wrap " >
         <div>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="sky-blue" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
         </svg><a className="media m-2" href="https://twitter.com/pankajc62780788/status/1675699566962958336?s=46&t=OXoFQjyDdakJFxo8P2eBHg" target="_blank" > ट्विटर पर फ़ॉलो करें </a>
         </div>
         <div>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="sky-blue" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
         </svg><a className="media m-3" target="_blank" href="https://instagram.com/mediapankaj09?igshid=MjEwN2IyYWYwYw==" >
इंस्टाग्राम पर फॉलो करें </a>
         </div>
        </div>
    </div>
        </div>
    )
}
export default Home