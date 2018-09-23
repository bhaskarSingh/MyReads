import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import BookCategoryOption from './BookCategoryOption';

const styles = theme => ({
  card: {
    width: 300,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontSize: '1rem'
  }
});

class Book extends React.Component {
  state = {
    expanded: false,
    option: this.props.data.shelf || 'none'
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  getListSepratedByComma = (value) => {
    if (value === undefined) return ""
    return value.map(
        (value, index, arr) =>  index === (0 || arr.length-1) ? `${value} ` : `${value}, `
        || "Name not available");
  }

  getBookDescription = () => {
      const description = this.props.data.description;
      if (description === undefined) return ""
      const fullStop = description.indexOf('.');
      return description.substring(0, fullStop);
  }

  openBookPreview = () => {
    return (
        window.open(`${this.props.data.previewLink}`, "_blank")
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
        action={
          <BookCategoryOption data={this.props.data} />
       }
       classes={{
         title: classes.title
       }}
          title={this.props.data.title || "Name not available"}
          subheader={this.getListSepratedByComma(this.props.data.authors) || "Author name not available"}
        />
        <CardMedia
          className={classes.media}
          style={{height: '250px', width:'150px', margin:'0 auto'}}
          image={this.props.data.imageLinks.thumbnail || "Image not available"}
          title="Contemplative Reptile"
        />
        <CardActions className={classes.actions} disableActionSpacing>
        <Button onClick={ this.openBookPreview } size="small" color="primary">
        Preview
        </Button>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Average Rating: {this.props.data.averageRating || 'No rating available'}
            </Typography>
            <Typography paragraph variant="body2">
              Category: {this.getListSepratedByComma(this.props.data.categories) || 'No rating available'}
            </Typography>
            <Typography paragraph variant="body2">
              Description:
            </Typography>
            <Typography paragraph>
              {this.getBookDescription()}
            </Typography>
            <Typography paragraph variant="body2" >
              MaturityRating: {this.props.data.maturityRating || 'Maturity rating not available'},
            </Typography>
            <Typography paragraph variant="body2" >
              PageCount: {this.props.data.pageCount || 'Page count not avaliable'},
            </Typography>
            <Typography paragraph variant="body2" >
              PublishedDate: {this.props.data.publishedDate || 'Publish date not available'},
            </Typography>
            <Typography paragraph variant="body2" >
              Publisher: {this.props.data.publisher || 'Publisher name not available'}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Book);