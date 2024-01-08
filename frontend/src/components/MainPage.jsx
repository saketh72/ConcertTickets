import { Carousel } from "react-bootstrap";
import MainNavbar from "./MainNavbar";

function MainPage() {

    return (
        <div >
            <MainNavbar/>
            <Carousel slide={false} >
                <Carousel.Item >
                    <img style={{width:"80px",height:"545px"}}
                        className="d-block h-5 w-100"
                        src="https://th.bing.com/th/id/OIP.Pv55Av-0EQBgwp06IYRkuAHaFj?pid=ImgDet&rs=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Book Concert Tickets!!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width:"80px",height:"545px"}}
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/OIP.F3ZDBM9--QILUGlg1S0kcQHaE7?pid=ImgDet&rs=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Enjoy music at its Purest!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width:"80px",height:"545px"}}
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/OIP.CesyybqHkjx4Rc0HLs6zLAHaE8?pid=ImgDet&rs=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>For all the Music Lovers!!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MainPage;