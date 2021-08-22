class Main extends React.Component {
    constructor(props) {
        super(props)
        this.handleMoreBox = this.handleMoreBox.bind(this)
        this.handleLessBox = this.handleLessBox.bind(this)
        this.state = { isMoreBox: false }
        this.state = {}
    }

    handleMoreBox() {
        this.setState({ isMoreBox: true })
    }

    handleLessBox() {
        this.setState({ isMoreBox: false })
    }


    UserGreeting(props) {
        return <h1>Have a Good Time!</h1>;
    }
    
    
    GuestGreeting(props) {
        return <h1>Welcome Message</h1>;
      }
    
    
    Greeting(props) {
        const isTittle = props.isTittle
        if (isTittle) {
            return <UserGreeting />;
        }
        return <GuestGreeting />;
    }


    render() {

    const isTittle = this.state.isTittle
    let button

    // if (isMoreBox) {
    //     button = <LessButton onClick={this.handleLessBox} />
    // } else {
    //     button = <MoreButton onClick={this.handleMoreBox} />
    // }

        return (
            <section>
                <header>
                    <div className='web-logo'>
                        <span>Website Title/Logo</span>
                    </div>

                    <div className='menulist'>
                        <div className='item'><a className='item-tag' href='#'>Item 1</a></div>
                        <div className='item'><a className='item-tag' href='#'>Item 2</a></div>
                        <div className='item'><a className='item-tag' href='#'>Item 3</a></div>
                        <div className='item'><a className='item-tag' href='#'>Item 4</a></div>
                    </div>


                    {/*  making manu trigger */}
                    <a href="#" className='showmenu'>☰</a>
                </header>

                <main>
                    <div className='greeting' isTittle={isTittle} onClick={() => this.Greeting()}></div> 
                    <section>
                        <div className='sec-title'>Section Title</div>
                        <div className='box-container'>
                            <div className='box'>Content Box 1</div>
                            <div className='box'>Content Box 2</div>
                            <div className='box'>Content Box 3</div>
                            <div className='box'>Content Box 4</div>
                        </div>
                    </section>


                    <div className='action-box'>
                        <span className='action-btn' onClick={() => this.moreBox()}>
                            Call to Action
                        </span>
                    </div>

                    <div className='listDiv'>
                        <div className='box'>Content Box 5</div>
                        <div className='box'>Content Box 6</div>
                        <div className='box'>Content Box 7</div>
                        <div className='box'>Content Box 8</div>
                    </div>

                </main>
            </section>
        )


    }
}




ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

