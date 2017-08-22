import React, { Component } from 'react';
import './App.css';
import { Sidebar, Segment, Menu, Image, Icon, Header } from 'semantic-ui-react'

class AppDashboard extends Component {
    state = {
        isOpen: 1,
        visible: true,
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        return (
            <div>
                <Sidebar.Pushable as={Segment} attached="bottom" className="test">
                    <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item onClick={() => this.setState({ isOpen: 1 })} name='home'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item onClick={() => this.setState({ isOpen: 2 })} name='setting' >
                            <Icon name='setting' />
                            Settings
                        </Menu.Item>
                        <Menu.Item onClick={() => this.setState({ isOpen: 3 })} name='camera'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher className="test">
                        <Segment basic>
                            <Content isOpen={this.state.isOpen} />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

class Content extends Component {
    render() {

        switch (this.props.isOpen) {
            case 1:
                return (
                    <div>
                        <Header as='h1'>APP presentation</Header>
                        <Image src='//unsplash.it/800/480'/>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <SettingsList/>
                        <Image src='//unsplash.it/800/480'/>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <DayTracker/>
                        <ChangeList/>
                        <Image src='//unsplash.it/800/480'/>
                    </div>
                )
            default:
        }
    }
}
class DayTracker extends Component {
    render() {
        return (
            <div>
                <div>1 Day</div>
                <div>6 hours</div>
            </div>
        );
    }
}

class ChangeList extends Component {
    render() {
        return (
            <div>
                <Changes/>
            </div>
        );
    }
}

class Changes extends Component {
    render() {
        return (
            <div>
                <div>Location 1</div>
                <div>100%</div>
            </div>
        );
    }
}

class SettingsList extends Component {
    render() {
        return (
            <div>
                <Settings />
            </div>
        );
    }
}
class Settings extends Component {
    render() {
        return (
            <div>
                <div>settings</div>
                <div>settings</div>
                <div>settings</div>
                <div>settings</div>
                <div>settings</div>
            </div>
        );
    }
}
export default AppDashboard;
