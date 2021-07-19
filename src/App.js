import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';            
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';


const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX :"auto"
  },
  table : {
    minWidth : 1080
  }
})

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
class App extends Component{
  render(){
    const { classes } = this.props;
  return(
    <Paper className = {classes.root}>
      <Table className = {classes.table}>
        <TableHead>
         <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>직업</TableCell>
         </TableRow> 
        </TableHead>
          <TableBody>
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
            </TableBody>

      </Table>

        
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
