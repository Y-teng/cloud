import React from 'react'
 class List extends React.Component{
     //生命周期挂载
     componentDidMount(){
         console.log(this,'挂载完成');
         console.log(this.props,'路由的配置对象');
         console.log('动态路由参数的值--',this.props.match.params);
     }
    render(){
            return (<div>
                <h1>List </h1>
                <h1>动态路由参数的值---{this.props.match.params.id}</h1>
                <div>
                    <button onClick={()=>this.props.history.go(-1)}>返回go</button>
                    {/* <button onClick={()=>this.props.history.go(-1)}>返回go</button> */}
                </div>
                <div>
                    <button onClick={()=>this.props.history.goBack()}>返回 goBack()</button>
                </div>
            </div>)
        }
}
 export default List