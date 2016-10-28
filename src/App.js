import React, { Component, PropTypes } from 'react';
import 'styles/App.scss';
import Badge from 'components/Badge';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import Maps from 'components/Maps';

export class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <Nav />
                <Container>
                    {children}
                </Container>
                <Maps location="36.12,-115.16"/>
                <Footer>
                    <Badge iconName="microphone" />
                </Footer>
            </div>
        );
    }
}

export default App;
