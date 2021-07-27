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
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX :"auto"
  },
  table : {
    minWidth : 1080
  },
  progress: {
    margin : theme.spacing.unit * 2
  }
})

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

  state = {
    customers: "",
    completed : 0 
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    /*
    this.callApi()
     .then(res => this.setState({customers : res}))
     .catch(err => console.log(err));
     */
    //api 호출이 발생되지 않기 때문에 customer의 값은 비어있기 때문에 progress바를 출력가능   
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () =>{
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed+1});
  }

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
            this.state.customers ? this.state.customers.map(c=>{
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
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant ="determine" value={this.state.completed}/>
                </TableCell>
            </TableRow>
          }
            
            </TableBody>

      </Table>

        
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
