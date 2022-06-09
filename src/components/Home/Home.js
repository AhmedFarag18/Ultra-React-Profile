import React from 'react'
import {HomeSection,HomeDesc,HomeInfo,HomeTitle,HomeBtn,HomeInformation,Span} from "./style";

const Home = () => {
  return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>I'm Ahmed Farag</HomeTitle>
                    <HomeInfo>UI/UX & Front End Developer</HomeInfo>
                    <HomeDesc>
                        I'm a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
  )
}

export default Home