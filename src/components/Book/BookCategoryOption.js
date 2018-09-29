import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBookCategory, getAllBooks } from '../../action';

const options = [
  'currentlyReading',
  'wantToRead',
  'read',
  'none'
];

const ITEM_HEIGHT = 48;

class BookCategoryOption extends React.Component {
  state = {
    anchorEl: null,
    option: this.props.data.shelf || 'none'
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSelectInput = (e, book) => {
    console.log(e.currentTarget.innerText ,book);
    this.props.updateBookCategory(book, e.currentTarget.innerText).then(_ => {
      this.props.getAllBooks();
    });
    this.setState({
        option: e.currentTarget.innerText
    })
    this.handleClose();
}

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <li style={{padding: '10px'}} key={option} selected={option === this.state.option} onClick={(e) => this.handleSelectInput(e, this.props.data)}>
              {option}
            </li>
          ))}
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateBookCategory,
    getAllBooks
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookCategoryOption);