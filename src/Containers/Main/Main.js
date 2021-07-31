import React, { Component } from 'react';


// import Header from '../../Components/Header/Header';
import Home from '../../Components/Home/Home';
// import Intro from '../../Components/Intro/Intro';
// import Skills from '../../Components/Skills/Skills';
// import Portfolio from '../../Components/Portfolio/Portfolio';
// import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';



class Main extends Component {

    constructor(props) {

        super(props);

        this.homeRef = React.createRef();
        this.introRef = React.createRef();
        this.skillsRef = React.createRef();
        this.portfolioRef = React.createRef();
        this.formRef = React.createRef();
    }

    scrollToContent = (element) => {

        switch (element) {
            case 'home':
                this.homeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'intro':
                this.introRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'skills':
                this.skillsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'portfolio':
                this.portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'form':
                this.formRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    }

    //   componentDidMount() {

    //     console.log(this.homeRef)
    //   }


    render() {

        return (

            <div>

                {/* <Header goToComponent={this.scrollToContent}>
                    
                </Header> */}

                <div ref={this.homeRef}>
                    <Home>
                    </Home>
                </div>

                {/* <div ref={this.introRef}>
                    <Intro >

                    </Intro>        
                </div>
                
                <div ref={this.skillsRef}>
                    <Skills>
                        
                    </Skills>
                </div>

                <div ref={this.portfolioRef}>
                    <Portfolio>

                    </Portfolio>
                </div>
                
                <div ref={this.formRef}>
                    <Contact>

                    </Contact>
                </div> */}


                <Footer>
                </Footer>
            </div>
        );//end return
    }//end render
}//end class

export default Main;