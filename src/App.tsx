import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
    background: red;
`;

function App() {
    return (
        <Container className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </Container>
    );
}

export default App;
