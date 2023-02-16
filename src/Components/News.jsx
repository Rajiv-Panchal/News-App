import React, { Component } from 'react'
import NewsItems from './NewsItems'
import  PropTypes from 'prop-types'
import '../style.css';


export default class News extends Component {
  newsarticles=[]
static propTypes={
category : PropTypes.string,
pageSize : PropTypes.number,
}
static defaultProps={
  category : "general",
 pageSize  : 6
}



constructor(props)
{
  super(props);
  this.state={
  newsarticles:this.newsarticles,
  page:1
  }
}
//this life cycle function is equivalent to react useEffect Hook
async componentDidMount()
{
let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=c70d94d16ada49f79e51f14c6c6b1757&pageSize=${this.props.pageSize}&category=${this.props.category}`;
let articles= await fetch(url);
let parseddata = await articles.json();
console.log(parseddata);
this.setState({newsarticles: parseddata.articles,totalResults:parseddata.totalResults});
}
previous=async()=>{
console.log("previous");
let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=c70d94d16ada49f79e51f14c6c6b1757&pageSize=${this.props.pageSize}&page=${this.state.page-1}&category=${this.props.category}`;
let articles= await fetch(url);
let parseddata = await articles.json();
console.log(parseddata);
this.setState({page: this.state.page-1,newsarticles: parseddata.articles});
}

n
next=async()=>{  
// if(this.state.page+1> Math.ceil(this.state.totalResults/6))
// {

// }

  console.log("next");
  let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=c70d94d16ada49f79e51f14c6c6b1757&pageSize=${this.props.pageSize}&page=${this.state.page+1}&category=${this.props.category}`;
  let articles= await fetch(url);
  let parseddata = await articles.json();
  console.log(parseddata);
  this.setState({page: this.state.page+1,newsarticles: parseddata.articles});
}
  render() {
    return (
      <div>
        <h3 style={{textAlign:"center"}}>
        {/* THIS IS NEWS COMPONENT */}
        </h3>
        <h1 style={{textAlign:"center"}} className="co">Top Headlines</h1>
        <div style={{alignItems:"center"}} className='row'>

          {this.state.newsarticles.map((element)=>{
             return  <div className='col-md-4' key={element.url}>
             <NewsItems title={element.title?element.title.slice(0,50): ""} description={element.description?element.description.slice(0,50): ""} imgurl={element.urlToImage?element.urlToImage:"https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg"} newsurl={element.url}/>
           </div>
          }
          )}
           
            
        </div>
        <div className='container d-flex justify-content-between'>
        <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.previous}> &larr; Previous</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/6)} type='button' className='btn btn-dark ' onClick={this.next}> Next &rarr;</button>
        </div>

      </div>
    )
  }
}