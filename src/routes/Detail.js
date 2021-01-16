import React from "react";

//클릭했을때 가도록 설정한다.
//영화의 세부 내역을 보여둔다.
//json 데이터 : location/state/영화정보

class Detail extends React.Component
{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        //state 존재하는지
        const {location} = this.props;
        if(location.state){
            return <span className="detail_title">{location.state.title}</span>;
        }else{
            return null;
        }
    }
}


export default Detail;