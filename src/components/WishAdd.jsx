import React from 'react';
import PropTypes from 'prop-types';

function WishAdd({addClick}) {
  return (
    <div>
      <input type="button" className="btn btn-primary" value="Add" onClick={addClick}/>
    </div>
  )
}

WishAdd.propTypes = {
  addClick: PropTypes.func,
};

WishAdd.defaultProps = {
  addClick: () => {},
};


export default WishAdd;
