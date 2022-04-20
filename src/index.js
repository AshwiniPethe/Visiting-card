import ReactDOM from 'react-dom';
import Content from './Content';

const App = ()=>{
    return (
        <div className='ui container comments' style={{margin : "10px",padding: "10px"}}>
          <h3 className="ui dividing header">Visiting Cards</h3>
            <Content name='Riya Agrawal' contact='9844295564' occupation='Artist' email='riya.agarwal@gmail.com' address='Chandni Chowk , Delhi'/>
            <Content name='Carla Houston' contact='3975845593' occupation='Web Designer' email='carlahouston67@gmail.com' address='59 Mill Lane London'/>
            <Content name='Chris Watson' contact='5183926492' occupation='Content Writer' email='chrisw223@yahoo.in' address='73 Windsor Road Europe'/>
        </div>
      );
};

ReactDOM.render(<App/>,document.getElementById('root'));
