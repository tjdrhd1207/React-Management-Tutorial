import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers =[
  {
  'id':1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김재민',
  'birthday' : '931207',
  'gender' : '남',
  'job': '직장인'
  },
  {
    'id':2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '차은우',
    'birthday' : '931207',
    'gender' : '남',
    'job': '직장인'
    },
    {
      'id':3,
      'image' : 'https://placeimg.com/64/64/3',
      'name' : '여지은',
      'birthday' : '931111',
      'gender' : '남',
      'job': '학생'
      }
]
/*
class App extends Component{
  render(){
  return (
      <div>
        <Customer 
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
        />
        <Customer 
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
        />
        </div>
    );
  }
}
*/
function App(){
  return(
    <div>
      {
        customers.map(c=>{
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}

            />
          );
        })
      }  
    </div>
  );
}

export default App;
