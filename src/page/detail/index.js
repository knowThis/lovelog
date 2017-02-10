/**
 * Created by knowthis on 2017/2/9.
 * auther website:http://zhouxianbao.cn
 */
import React,{Component} from 'react';
import Header from './../../components/header';
import Footer from './../../components/footer';
import './index.css';

export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.params.id,
            data:{
                title:'今天街上看到美女了',
                content:'假装万能组」今日正式成立了。这是一个纯粹00后的组织，组织中的人们来自五湖四海，生活经历也各不相同，如果没有互联网，他们并不会有认识的机会。而现在他们通过知乎聚集在一起，渐渐熟悉，互相交流自己的观点， 碰撞出思想的火花，他们尝试用多元的眼光看待面前这个自己不甚了解的世界，或许他们的观点会有些偏激，或许他们的看法会有些幼稚，可是他们知道河流一旦离开出生之地，就不能停息。'
            }
        }
    }
    render(){
        return <div className="common">
            <Header type="detail" name={this.state.data.title}/>
            <div className="common-content">
                <div className="head-img" style={{'backgroundImage':'url(http://cdn.xbpig.cn/bb476573ec70fc2de3ac18cb82e127e2.png)'}}>
                    <div className="head-info">
                        <div className="main">11年30日</div>
                        <div className="other">距离2016年12月11日</div>
                    </div>
                </div>
                <div className="container">
                    <div className="title">今天街上看到美女了</div>
                    <div className="other">
                        <div className="address"><i className="iconfont">&#xe615;</i> 上海文青大街</div>
                        <div className="createTime">2016-12-23 12:23</div>
                    </div>
                    <div className="content">
                        {this.state.data.content}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>;
    }
}