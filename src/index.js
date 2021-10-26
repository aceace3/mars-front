import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import { color } from '@material-ui/system';



// function ContainerDiv(){
//     return <div id="containerDiv"><div id="top"></div><div id="mid"></div></div>
// }

// function Title() {
//   return <div style={{
//         width:'100%',
//         height:'44px',
//         background:'white',
//         textAlign:'center',
//         opacity:'0.6',
//         marginTop:'200px'
//     }}><b>MARS LAND PROJECT&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<b>荧&nbsp;惑</b></b><br></br>HZW & ZY</div>;
// }

// function PaperBox() {
//   return (
    // <Container maxWidth="sm">
    //     <Slide direction="up" in={true}>
    //         <Box
    //         sx={{
    //             display: 'flex',
    //             flexWrap: 'wrap',
    //             '& > :not(style)': {
    //             m: 1,
    //             width: 120,
    //             height: 52,
    //             opacity: 0.4,
    //             },
    //         }}
    //         >
    //             <Paper elevation={3} style={{textAlign:'center',lineHeight:'52px',cursor:'pointer'}}><b>Blog</b></Paper>
    //             <Paper elevation={3} style={{textAlign:'center',lineHeight:'52px'}}><b></b></Paper>
    //             <Paper elevation={3} style={{textAlign:'center',lineHeight:'52px'}}><b></b></Paper>
    //             <Paper elevation={3} style={{textAlign:'center',lineHeight:'52px'}}><b></b></Paper>
    //         </Box>
    //     </Slide>
    // </Container>
//   );
// }

//   ReactDOM.render(<ContainerDiv />, document.querySelector('#root'));
//   ReactDOM.render(<Title />, document.querySelector('#top'));
//   ReactDOM.render(<PaperBox />, document.querySelector('#mid'));

class ContainerDiv extends React.Component{
    render(){
        return (
            <div id="containerDiv">
                <div id="top">
                    <Title />
                </div>
                <div id="mid">
                    <PaperBox />
                </div>
                {this.props.children}
            </div>
        )
    }
}

class Title extends React.Component{
    render(){
        return(
            <div style={{
                width:'100%',
                height:'44px',
                background:'white',
                textAlign:'center',
                opacity:'0.6',
                marginTop:'200px'
            }}><b>MARS LAND PROJECT&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<b>荧&nbsp;惑</b></b><br></br>HZW & ZY</div>
          ) 
    }
}

class PaperBox extends React.Component{
    render(){
        return(
            <Container maxWidth="sm">
            <Slide direction="up" in={true}>
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 120,
                    height: 52,
                    opacity: 0.4,
                    },
                }}
                >
                    <Link to='/TestBox' style={{textDecoration:'none'}}><Paper elevation={3} style={{textAlign:'center',lineHeight:'52px',cursor:'pointer'}}><b>Blog</b></Paper></Link>
                    <Paper elevation={3} style={{textAlign:'center',lineHeight:'52px'}}><b></b></Paper>
                    <Paper elevation={3} style={{textAlign:'center',lineHeight:'52px'}}><b></b></Paper>
                    <Paper elevation={3} style={{textAlign:'center',lineHeight:'52px'}}><b></b></Paper>
                </Box>
            </Slide>
        </Container> 
        )
    }
}

class TestBox extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'white',opacity:0.5}}><Link to='/' style={{textDecoration:'none'}}>返回首页</Link></div>
        )
    }
}

class App extends React.Component {
    render() {
      return (
            <BrowserRouter>
              <div>
                <Route path='/' exact component={ContainerDiv}></Route>
                <Route path='/TestBox' exact component={TestBox}></Route>
                {/* <Route path='/detail/:id' exact component={Detail}></Route> */}
              </div>
            </BrowserRouter>
      )
    }
  }
  
  ReactDOM.render(<App />, document.querySelector('#root'));