import {Component} from "react"

import MovieList from '../MovieList'
import './index.css'

const apiConstant = {
    intitial:"INITIAL",
    inProgress:"IN_PROGRESS",
    success:"SUCCESS",
    failure:"FAILURE",
}
class Movies extends Component {
    state ={
        apiUrlConstant:apiConstant.intitial,
        apiList:[],
    }

    componentDidMount(){
        this.getComponent()
    }

    getComponent=async ()=>{
        this.setState({apiUrlConstant:apiConstant.inProgress})
        const apiUrl = "https://apis.ccbp.in/popular-repos?language=ALL"
        const response =await fetch(apiUrl)
        if(response.ok){
            const data = await response.json()
            const updatedData=data.popular_repos.map(eachRepo=>({
                id:eachRepo.id,
                name:eachRepo.name,
                issuesCount:eachRepo.issues_count,
                forksCount:eachRepo.forks_count,
                starsCount:eachRepo.stars_count,
                avatarUrl:eachRepo.avatar_url,
        }))
        this.setState({apiUrlConstantapi:apiConstant.success,apiList:updatedData})}
        else {
            this.setState({apiUrlConstant:apiConstant.failure})
        }
    }


    render(){
        const {apiList}=this.state
        return(
            <div>
                <ul className="bg-container">
                   {apiList.map(eachList =>(
                       <MovieList key={eachList.id}
                       moviesLists={eachList}
                       />
                   ))}
                </ul>
            </div>
        )
    }
}
export default Movies