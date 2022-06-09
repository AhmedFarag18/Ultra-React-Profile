import React, { Component } from 'react';
import axios from 'axios';
import {Icon,Line,PartDesc,PartTitle,Span,Parent,WorkPart,WorkSection,WorkTitle} from "./style"


class Work extends Component {

    state = {
        works:[]
    }

    componentDidMount(){
        axios.get("js/data.json")
        .then(response =>{
            this.setState({works:response.data.works})
        })
    }

    render(){

        const {works} = this.state;
        const worksList = works.map((workItem)=>{
            return (
                <WorkPart key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
            )
        })

        return (
        <WorkSection>
            <div className='container'>
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                <Parent>
                {worksList}
                </Parent>
            </div>
        </WorkSection>
        )
    }
}

export default Work