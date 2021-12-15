import './index.css'

const MovieList=(props)=>{
    const {moviesLists}=props
    const{name,avatarUrl,starsCount,issuesCount,forksCount}=moviesLists
    return(
        <li className='list'>
            <div className='container'>
            <img src={avatarUrl} alt={name} className='image'/>         
            <h1>{name}</h1>
            <div className='stars-count'> 
            <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="Stars" className='star-image'/>
            <p className='paragraph'>:{starsCount}</p>
            </div>
            <div className='forks-count'>
            <img src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png" alt="froks" className='forks-image'/>
            <p>:{forksCount}</p>
            </div>
            <div className='issuess-count'>
            <img src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png" alt="issuesCount" className='issues-image'/>
            <p>:{issuesCount}</p>
            </div>
            </div>
        </li>
    )
}

export default MovieList