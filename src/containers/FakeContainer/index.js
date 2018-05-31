import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchPokemon } from '../../api';
import { storePokemonTypesAction } from '../../actions/index';

class FakeContainer extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/types';
    
    fetchPokemon(url)
  }

  render() {
    return (
      <div>
        <button onClick={()=> {
          const url = 'http://localhost:3001/types';
          fetchPokemon(url);
          
          this.props.fakeAction();
          // console.log(response)
          // this.props.storePokemonTypes();
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
  // storePokemonTypes: (response) => dispatch(storePokemonTypesAction(response))
});
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
