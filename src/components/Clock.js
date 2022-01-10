import React from 'react';


class Clock extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        this.clockTime = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTime);
    };

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        console.log('clock component rendered');
        const { date, locale } = this.state;
      return (
        <div>
            <h1 className="heading">
                <span className="text">{date.toLocaleTimeString(locale)}</span>
            </h1>
            <Button change={this.handleClick} locale="en-US">
                Click here
            </Button>
        </div>
      )
    }
}

export default Clock;