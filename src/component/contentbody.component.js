import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

export default class ContetnBody extends Component {

    componentDidMount() {
        sr.reveal('.headline', {})
        sr.reveal('.my-img', { delay: 200 })
        sr.reveal('.social-icone_i',{interval:200})

        sr.reveal('.about_img', {})
        sr.reveal('.about_text', { delay: 200 })

        sr.reveal('.skill_img', { interval: 200 })
    }
    render() {
        return (
            <div>
                <div className="container-fluid" style={{
                    'paddingTop': '70px',
                    'paddingBottom': '70px',
                    'height': '676px'
                }} id="home">
                    <div className="row" style={{'marginTop':'20px'}}>
                        <div className='headline col-sm-5' style={{'zIndex':'99'}}>
                            <h1 style={{'color':'white','fontWeight':'100'}}>
                                Hi,<br />
                    I'am Mandar<br />
                    Front End Developer
                    </h1>
                  
                        </div>
                        <ul className="social_icone">
                        <li className="social-icone_i"><a href="https://www.linkedin.com/in/mandar-jaurat-95india"><i className='bx bxl-linkedin'></i></a></li>
                        <li className="social-icone_i"><a href="https://github.com/mandar95"><i className='bx bxl-github'></i></a></li>
                        <li className="social-icone_i"><a href="https://www.instagram.com/mandarjaurat/"><i className='bx bxl-instagram'></i></a></li>
                    </ul>
                        <div className="col-sm-7">
                            <div className="my-img"></div>
                        </div>
                    </div>
                </div>



                <div className="container-fluid" style={{
                    'paddingTop': '70px',
                    'paddingBottom': '70px',
                    'height': '676px'
                }} id="about">
                    <div className="text-center my-title m-auto">
                        <span>About</span>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 about_img">
                            <div className="my-img2"></div>
                        </div>
                        <div className="col-sm-6 about_text" style={{ "paddingTop": "20px",'color':'white','font-wight':'100','fontSize':'17px' }}>
                            <p>I'am 24 year old Front End Developer based in Mumbai,india.
                            I'am very much passionate about coding and designing.I love to expolre
                            new technology and challenging position with a creative work environment to
                            enhance expertise in front end development and application design.
                        </p>
                        </div>
                    </div>
                </div>
                {/* skills */}
                <div className="skill container-fluid" style={{
                    'paddingTop': '70px',
                    'paddingBottom': '70px',
                    'height': '502px',
                    'backgroundColor':'white'
                }} id="skill">
                    <div className="text-center my-title" style={{'color':'#48b1d1'}}>
                        <span style={{'borderBottom':'1px solid #48b1d1'}}>Skills</span>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 skill_img text-center">
                            <i className='bx bxl-javascript' style={{ "color": "#f0db4f" }}></i>
                        </div>
                        <div className="col-sm-4 skill_img text-center">
                            <i className='bx bxl-react' style={{ "color": "#61dbfb" }}></i>
                        </div>
                        <div className="col-sm-4 skill_img text-center">
                            <i className='bx bxl-nodejs' style={{ "color": "#3c873a" }}></i>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-4 skill_img text-center">
                            <i className='bx bxl-html5' style={{ "color": "#e34c26" }}></i>

                        </div>
                        <div className="col-sm-4 skill_img text-center">
                            <i className='bx bxl-css3' style={{ "color": "#464de4" }}></i>

                        </div>
                        <div className="col-sm-4 skill_img text-center">

                            <i className='bx bxl-jquery' style={{ "color": "#464de4" }}></i>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}