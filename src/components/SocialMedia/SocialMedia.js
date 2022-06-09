import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Icon, Social, SocialDesc, SocialSection, Span, SpanInfo } from './style'

const SocialMedia = () => {


    const [social,setSocial] = useState([]);
    useEffect(() => {
        axios.get('js/data.json')
        .then(response=>{ setSocial(response.data.social) })
    }, []);

        const socialList = social.map( (socialItem) => {
            return (
                <Social item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <SocialDesc>
                        <Span>{socialItem.title}</Span>
                        <SpanInfo>{socialItem.body}</SpanInfo>
                    </SocialDesc>
                </Social>
            )
        } )

        return (
            <SocialSection>
                {socialList}
            </SocialSection>
        )
}

export default SocialMedia