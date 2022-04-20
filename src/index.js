import ReactDOM from 'react-dom';
import ApproveCard from './ApproveCard';
import Comment from './Comments';

const App = ()=>{
    return (
        <div className='ui container comments' style={{margin : "10px",padding: "10px"}}>
          <h3 className="ui dividing header">Comments</h3>
          <ApproveCard button1='yes' button2='no'> 
            <h2 style={{color:'red'}}>Warning !</h2>
            <p>Are you sure want to delete something?</p>
          </ApproveCard>
          <ApproveCard><Comment name = 'Riya Agrawal' comment = 'An extremely Interesting post.'/></ApproveCard>
          <ApproveCard><Comment name = 'Carla Houston' comment = 'Very good content.Helped me a lot'/></ApproveCard>
          <ApproveCard><Comment name = 'Chris Watson' comment = 'Superb Blog. I would like to read this blog.'/></ApproveCard>
          <ApproveCard><Comment name = 'Adam Smith' comment = 'Helpful Info'/></ApproveCard>
          <ApproveCard><Comment name = 'Tanishq Dhiman' comment = 'Nice information'/></ApproveCard>     
        </div>
      );
};

ReactDOM.render(<App/>,document.getElementById('root'));
