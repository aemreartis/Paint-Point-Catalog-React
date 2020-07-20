import React from "react";
import PageCard from "../PageCards";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            currentPage: 1,
            cardsPerPage: 9
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        fetch('/api/cards')
            .then(res => res.json())
            .then(cards => this.setState({cards}, () => console.log('Customers fetched...', cards)));
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const {cards, currentPage, cardsPerPage} = this.state;

        // Logic for displaying cards
        const indexOfLastTodo = currentPage * cardsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - cardsPerPage;
        const currentTodos = cards.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((postDetail) => {
            return <PageCard cardInfo={postDetail}/>
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <button
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    type="button"
                    className="btn"
                >
                    {number}
                </button>
            );
        });

        return (
            <div>
                <div className="row">
                    {renderTodos}
                </div>
                <div>
                    <div className="sub-navbar-paging " style={{paddingBottom: '1cm'}}>
                        <nav className="navbar text-muted" style={{background: '#FFFFFF'}}>
                            <div className="btn-group mr-2 col-4" role="group" aria-label="First group">
                                {renderPageNumbers}
                            </div>
                            <div className=" col-2 float-right border-left">
                                <span style={{fontWeight: 'bold'}}>Go to</span>
                                <input type="text" size={2}/>
                                <button type="button" className="btn  py-1"><i className="fas fa-greater-than"/>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;