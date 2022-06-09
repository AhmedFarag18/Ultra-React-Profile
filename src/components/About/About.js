import React from 'react'
import {AboutInfo,AboutSection,Anchor,InfoDesc,InfoDir,InfoTitle,Span} from "./style"
const About = () => {
  return (
    <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>UI/UX & Front-End</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam nihil, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
  )
}

export default About