import React, { Component, PropTypes } from 'react';
import 'styles/App.scss';
import AudioControlsBlueToothView from 'views/Audio/AudioControlsBlueToothView';
import Badge from 'components/Badge';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';
import Maps from 'components/Maps';

export class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        location: PropTypes.object
    }

    render () {
        const { children } = this.props;
        return (
            <div>
                <Nav currentPath={this.props.location.pathname}>
                    <NavItem
                        link="/audio/bluetooth"
                        title="Audio" />
                    <NavItem
                        link="/talks/contacts"
                        title="Talks" />
                    <NavItem
                        link="/air"
                        title="Air" />
                </Nav>
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
