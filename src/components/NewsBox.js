import { Row, Col, Image, Avatar } from 'antd';
const NewsBox=()=>{
    return <div className='news-box'>
    <div className='img'>
    </div>
    <div className='text'>
      <p className='titles'>Байгууллагын 3х3 сагсан бөмбөгийн аварга шалгаруулах тэмцээн боллоо</p>
      <div className='employee'>
        <Avatar
          size={48}
          src={"https://cdn.sanity.io/images/etna2ro5/khutulcement-sanity/01b983065ea0b192b0887e7827bbd34c65d9b6d0-320x320.jpg"}
        />
        <div className='employee-name'>
          <p>А.Анххөтөл</p>
          <p>08/08/2022</p>
        </div>
      </div>
    </div>

  </div>

}

export default NewsBox;