import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Image,ImageWrapper,Overlay,OverlaySpan,PortfolioItem,PortfolioList,PortfolioSection,PortfolioTitle,Span,Parent} from "./style"

const Portfolio = () => {
const [ images , setImages ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then( response => { setImages(response.data.portfolio) } )
    } , [] )

    const PortfolioImages = images.map( (imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="img" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
                
        )
    } )

  return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <Parent>
              {PortfolioImages}            
            </Parent>
            
        </PortfolioSection>
  )
}

export default Portfolio