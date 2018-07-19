import React, { Component } from 'react';

// estilos
import '@material/button/dist/mdc.button.min.css';

class Ranking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ranking: 0,
        };
    }

    toggleRanking(action) {
        if (action === 'add' && this.state.ranking < 10) {
            this.setState({
                ranking: this.state.ranking + 1,
            });
        } else if (action === 'remove' && this.state.ranking > 0) {
            this.setState({
                ranking: this.state.ranking - 1,
            });
        }
    }

    // Por el momento ninguna de estas funciones se está utilizando
    // esta función suma al ranking y se puede utilizar sin argumentos
    addRanking() {
        if (this.state.ranking < 10) {
            this.setState({
                ranking: this.state.ranking + 1,
            });
        }
    }

    // esta función resta al ranking y se puede utilizar sin argumentos
    removeRanking() {
        if (this.state.ranking > 0) {
            this.setState({
                ranking: this.state.ranking - 1,
            });
        }
    }

    render() {
        return (
            <div className="ranking">
                {this.state.ranking}

                <button
                    className="mdc-button"
                    onClick={() => this.toggleRanking('add')}
                >
                   +
                </button>

                  <button
                    className="mdc-button"
                    onClick={() => this.toggleRanking('remove')}
                >
                    -
                </button>
            </div>
        );
    }
}

export default Ranking;