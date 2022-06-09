import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Bar,BarParent,BarParentSpan,BarPerc,BarTitle,ProfileUp,ProfileItem,ProfileList,ProfileSection,ProfileTitle,ProfileTitleSpan,Skills,SkillsDesc,SkillsTitle,SkillsTitleSpan,Span} from "./style";

const Profile = () => {

    const [profile, setProfile] = useState([]);

    useEffect ( () => {
        axios.get('js/data.json').then( response => { setProfile(response.data.profile) } )
    } , [] )


    const ProfileItems = profile.map( (profileItem) => {
        return (
            <Bar key={profileItem.id}>
                        <BarTitle>{profileItem.lang}</BarTitle>
                        <BarPerc>{profileItem.percent}</BarPerc>
                        <BarParent>
                            <BarParentSpan sp={profileItem.id}></BarParentSpan>
                        </BarParent>
                    </Bar>
        )
    })

    return (
        <ProfileSection>
            <div className="container">
                <ProfileUp>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Ahmed Farag
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            28/03/2001
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Bani Suef
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            ahmed@ahmed.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Span web>www.brazily.com</Span>
                        </ProfileItem>
                    </ProfileList>
                </ProfileUp>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {ProfileItems}
                </Skills>
            </div>
        </ProfileSection>
        
    )
}

export default Profile