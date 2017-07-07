import React,{Component} from 'react';
import Song from './Song.js';
class Search extends Component
{
	constructor(props) {
		super(props);
		this.state={
			song:'',
			value:''
		};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
		
	}
	handleSubmit(event)
	{
	var that=this;//防止this冲突
	fetch('/search?keywords='+that.state.value).then(res=>res.json())//这里发出请求
    .then(function(data){
    console.log(data.result.songs[1]);
    var Songs=[];
    data.result.songs.forEach(function(item,index){
    Songs.push(<Song info={item}></Song>)
    })
    that.setState({song:Songs,value:''})//传送songs属性


    })
    .catch(e=>console.log(e));

	}
	handleChange(event)
	{

		this.setState({value:event.target.value})
		// event.srcElement.value

	}
	render() {
		return(
		<div>
		<input onChange={this.handleChange} value={this.state.value} type="text" placeholder="查询"/>
		<button onClick={this.handleSubmit}>提交</button>
		<div className='audio_box'>{this.state.song}</div>
		</div>)
	}

}
export default Search;