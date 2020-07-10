import React from "react";
import { Row, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import { CardContent, Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import addLocale, { ADD_SELECTED_LANGUAGE } from "../redux/action";
import LoginForm from "../Login/LoginForm";
import history from "../history";

// const navigateTo = () => history.push('/componentURL');


class LanguageSelectionForm extends React.Component {

    constructor(props) {
        super(props);
        this.dispatchLocaleEvent = this.dispatchLocaleEvent.bind(this);
    }

    dispatchLocaleEvent(value) {
        localStorage.setItem('selected_locale', value);
        this.props.addLocale(value);
    }

 
    render() {
        const { items = {} } = this.props;
        return (
            <Card>
                <CardContent>

                    <Row>
                        {items.map(list =>
                            <Col key={list.value}>
                                <Button color="secondary"
                                    variant={this.props.locale === list.value ? 'contained' : 'outlined'}
                                    onClick={() => this.dispatchLocaleEvent(list.value)}
                                >{list.label}</Button>
                            </Col>)}
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <Button variant="contained" 
                            color="secondary"
                            onClick={() => history.push('/login')}  >Continue</Button>
                        </Col>
                    </Row>
                </CardContent>
            </Card>
        );
    };

}


const MapStateToProps = (state) => {
    return {
        locale: state.locale
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
        addLocale: (payload) => dispatch(addLocale(payload))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(LanguageSelectionForm);
