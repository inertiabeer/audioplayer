import React,{Component} from 'react';
import Song from './Song.js';
class Search extends Component
{
	constructor(props) {
		super(props);
		this.state={
			song:'',
			value:'',
			idx:'0'
		};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleIdx=this.handleIdx.bind(this);
		this.handleSelect=this.handleSelect.bind(this);
		
	}
	handleSubmit(event)
	{
	var that=this;//防止this冲突
	fetch('/search?keywords='+that.state.value).then(res=>res.json())//这里发出请求
    .then(function(data){
    let Songs=[];
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
	handleIdx(event)
	{
		let that=this;
		fetch('/top/list?idx='+this.state.idx)
		.then(res=>res.json())
		.then(data=>
			{console.log(data);
			let Songs=[];
			 data.result.tracks.forEach(function(item,index){
				Songs.push(<Song info={item}></Song>)
			});
			that.setState({song:Songs,value:''})


		})
		.catch(e=>console.log(e));
	}
	handleSelect(event)
	{
		this.setState({idx:event.target.value})
	}
	render() {
		return(
		<div>
		<input onChange={this.handleChange} value={this.state.value} type="text" placeholder="查询"/>
		<button onClick={this.handleSubmit}>提交</button>
		<select onChange={this.handleSelect}>
			<option value="0">云音乐新歌榜</option>
			<option value="1">云音乐热歌榜</option>
			<option value="2">网易原创歌曲榜</option>
			<option value="3">云音乐飙升榜</option>
			<option value="4">云音乐电音榜</option>
			<option value="5">UK排行榜周榜</option>

		</select>
		<button onClick={this.handleIdx}>获得榜单</button>
		<div className='audio_box'>{this.state.song}</div>
		</div>)
	}

}
export default Search;