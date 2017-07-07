import React,{Component} from 'react';
class Song extends Component{
	constructor(props) {
		super(props);
		this.state={
			url:''
		}
		//设计的时候，这里的props应该等于一个songs数组中的一项，定义为info


	}
	componentWillMount() {
	let that=this;
	fetch('/music/url?id='+this.props.info.id).then(res=>res.json()).then(function(res){
		that.setState({url:res.data[0].url})

        });
	}
	componentDidUpdate(prevProps, prevState) {

		if(this.props.info.name==prevProps.info.name)
		{

		}//这里进行判断是否更新了url
		else
		{	
			let that=this;
	     fetch('/music/url?id='+this.props.info.id).then(res=>res.json()).then(function(res){
		that.setState({url:res.data[0].url})

        });

		}
	}

	render()
	{
	return (

       <div className="audio_div">
       <h2>{this.props.info.name}</h2>
       <img src={this.props.info.album.blurPicUrl} />
       <h4>{this.props.info.name}</h4>
       <h4>{this.props.info.artists[0].name}</h4>
       <h4>{this.props.info.album.company||'无'}</h4>
        <audio src={this.state.url} controls="controls">
        </audio>
        </div>
	  );
	}
}
export default Song;