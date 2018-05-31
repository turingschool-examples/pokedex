import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchPokemon } from '../../api';
import { sendPokemonAction } from '../../actions/index';

class FakeContainer extends Component {

componentDidMount() {
  const url = 'http://localhost:3001/types';
  const pokemonTypes = 
  fetch(url)
  .then(response => response.json())
  .then(data => this.props.sendPokemonTypes(data))
}
  render() {
    return (
      <div>
        <button onClick={()=> {
          const url = 'http://localhost:3001/types';
          this.props.fakeAction();
          alert('FAKE')
        }}> FAKE </button>
      </div>
    );
  }
}

FakeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });
// const mapStateToProps = (state) => {
//   pokemonTypes: state.pokemonTypes
// }

const mapDispatchToProps = dispatch => ({ 
  fakeAction: () => dispatch(fakeAction()),
  sendPokemonTypes: (types) => dispatch(sendPokemonAction(types))
});

export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
