import React,{Component} from 'react';
export default class Carousel extends Component
{
    constructor(props)
    {
        super(props);
        this.handleLeft=this.handleLeft.bind(this);
        this.handleRight=this.handleRight.bind(this);
        this.handleAuto=this.handleAuto.bind(this);
        this.handleAction=this.handleAction.bind(this);
        this.state={
            index:0,
            imgUrl:this.props.imgs[0],
            userAction:false
        }

    }
    handleLeft(event)
    {
        event.preventDefault();
        let length=this.props.imgs.length;
       this.setState({
           index:(this.state.index-1+length)%length,
           imgUrl:this.props.imgs[(this.state.index-1+length)%length],
           userAction:true
           //获取索引
       })


    }
    handleRight(event) {
        event.preventDefault();

        let length=this.props.imgs.length;
        this.setState({
            index:(this.state.index+1+length)%length,
            imgUrl:this.props.imgs[(this.state.index+1+length)%length],
            userAction:true

            //获取索引
        })

    }
    handleAuto(event)
    {
        let length=this.props.imgs.length;
        if(this.state.userAction)
        {
        }
        else {
            this.setState({
                index:(this.state.index+1+length)%length,
                imgUrl:this.props.imgs[(this.state.index+1+length)%length]

                //获取索引
            })
        }

    }
    handleAction(event)
    {
        if(this.state.userAction)
        {
            this.setState({
                userAction:false
            })
        }
    }
    componentDidMount()
    {
        setTimeout(this.handleAuto,1000);
    }
    componentDidUpdate()
    {
        if(this.state.userAction)
        {

            setTimeout(this.handleAction,5000);
        }
        else
        {
            setTimeout(this.handleAuto,2000);
        }

    }

    render()
    {
        return(
            <div>
                <a href="" onClick={this.handleLeft}>左</a>
                <a href="" onClick={this.handleRight}>右</a>

                <img src={this.state.imgUrl} alt=""/>


            </div>
        )
    }
}