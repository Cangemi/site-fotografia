import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
    '/man_and_woman_kissin.jpg',
    '/groom_and_bride_kiss.jpg',
    '/close.jpg',
    '/baby_wearing.jpg',
    '/baby_sleeping.jpg',
    '/adorable_baby.jpg',
    '/man_and_woman_standi.jpg',
    '/adolescence.jpg'
];

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <div className="portfolio">
                    <div className="row">
                        <div className="col-sm port" >
                            <Image src="/man_and_woman_kissin.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 0, isOpen: true })} />
                        </div>
                        <div className="col-sm port">
                            <Image src="/groom_and_bride_kiss.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 1, isOpen: true })} />
                        </div>
                        <div className="col-sm port">
                            <Image src="/close.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 2, isOpen: true })} />
                        </div>
                        <div className="col-sm port">
                            <Image src="/baby_wearing.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 3, isOpen: true })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm port">
                            <Image src="/baby_sleeping.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 4, isOpen: true })} />
                        </div>
                        <div className="col-sm port">
                            <Image src="/adorable_baby.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 5, isOpen: true })} />
                        </div>
                        <div className="col-sm port">
                            <Image src="/man_and_woman_standi.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 6, isOpen: true })} />
                        </div>
                        <div className="col-sm port">
                            <Image src="/adolescence.jpg" width="250px" height="210px" onClick={() => this.setState({ photoIndex: 7, isOpen: true })} />
                        </div>
                    </div>
                </div>


                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}