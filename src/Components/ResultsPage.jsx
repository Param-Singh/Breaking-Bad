import React,{useState,useEffect} from 'react'
import CharacterCard from '../Card/CharacterCard'
import '../Css/ResultsPage.css'
export default function ResultsPage() {
    const [pageNumber,setPageNumber]=useState(1);
    const [fetchResult,setFetchResult]=useState([])
    const [Query, setQuery] = useState('')
    var baseUrl='';
    
    useEffect(() => {
        var offset=pageNumber-1
        baseUrl=`https://www.breakingbadapi.com/api/characters?limit=10&offset=${offset*10}`
        fetch(baseUrl)
        .then((response)=>response.json())
        .then((response)=>DisplayfetchResult(response))
        .catch((err)=>alert("An Error Occured, Please try Again"))
        return () => {
            // cleanup
        }
    }, [pageNumber])
    useEffect(() => {
        baseUrl=`https://www.breakingbadapi.com/api/characters?name=${Query}`
        fetch(baseUrl)
        .then((response)=>response.json())
        .then((response)=>DisplayfetchResult(response))
        .catch((err)=>alert("An Error Occured, Please try Again"))
        return () => {
            // cleanup
        }
    }, [Query])
    function DisplayfetchResult(response) {
        console.log(response,response.length);
        setFetchResult(response)
    }
    function search(){
        const query=document.getElementById("searchQuery1").value
        setQuery(query)
        setPageNumber(1)
    }
    return (
        <>
        <div id="searchform1">
                <input id='searchQuery1' placeholder="Seach Something Here.."></input>
                <button id='btt1' className="searchButton1" onClick={search} >Search</button>
        </div>
        <div id='wholePage'>
            {fetchResult.map((eachResult)=> <CharacterCard name={eachResult.name} birthday={eachResult.birthday} status={eachResult.status} occupation={eachResult.occupation} img={eachResult.img}/>)}
            <div id='pageNavigation'>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber  ${pageNumber===1 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(1)}>1</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===2 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(2)}>2</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===3 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(3)}>3</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===4 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(4)}>4</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===5 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(5)}>5</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===6 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(6)}>6</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===7 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(7)}>7</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===8 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(8)}>8</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===9 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(9)}>9</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===10 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(10)}>10</button>
            </div>
        </div>
        </>
    )
    function geturl(query) {
        let finalQuery=''
        baseUrl=`https://www.breakingbadapi.com/api/characters?name=${query}`
        return finalQuery
    }
}
