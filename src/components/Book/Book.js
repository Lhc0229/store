import React, {Component} from 'react';
import { add } from "../../store/action";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Book extends Component {
    componentDidMount(){
        this.props.add(888);
    }
    render() {
        return (
            <div>
                { this.props.pageTitle }
            </div>
        );
    }
}

Book.propTypes = {
    pageTitle: PropTypes.number
};

const mapStateToProps = state => {
    return {
        pageTitle:state.reducer.pageTitle,
        infoList:state.reducer.infoList
    }
}
export default connect(mapStateToProps, { add })(Book);