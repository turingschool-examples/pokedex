import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchPokemon } from '../../api';
import { sendPokemonTypes } from '../../actions/index';

class FakeContainer extends Component {

  async componentDidMount() {
    const url = 'http://localhost:3001/types';
    
    const types = await fetchPokemon(url)
    this.props.sendPokemonTypes(types);
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

// const mapStateToProps = ({ fake }) => ({ fake });
const mapStateToProps = (state) => ({
  pokemonTypes: state.pokemonTypes
})
const mapDispatchToProps = dispatch => ({ 
  fakeAction: () => dispatch(fakeAction()),
  sendPokemonTypes: (types) => dispatch(sendPokemonTypes(types))
});

export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
