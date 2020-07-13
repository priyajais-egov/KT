import React, { Component } from "react";
import axios from 'axios';
import LanguageSelectionForm from "./LanguageSelectionForm";
import { connect } from "react-redux";
import { fetchLanguage, addLanguage } from "../redux/action";

const http = axios.create({
  baseURL: window.location.origin
});

export const MDMS = () => {
  const req = {
    RequestInfo: {
      "apiId": "Rainmaker",
      "ver": ".01",
      "ts": "",
      "action": "_search",
      "did": "1",
      "key": "",
      "msgId": "20170310130900|en_IN",
      "authToken": null
    },
    MdmsCriteria: {
      tenantId: "pb",
      moduleDetails: [
        {
          moduleName: "common-masters",
          masterDetails: [
            {
              name: "StateInfo"
            }
          ]
        }
      ]
    }
  };
  return http.post('egov-mdms-service/v1/_search?tenantId=pb', req, {
    proxy: {
      host: 'https://egov-micro-dev.egovernments.org'
    }
  });
};

class LanguageSelection extends Component {
  state = {
    languages: []
  };

  componentDidMount = () => {
    this.props.fetchLanguage();
  }


  render() {
    const { languages = [] } = this.state;
    return (
      <LanguageSelectionForm />

    );
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    fetchLanguage: () => dispatch(fetchLanguage())
  }
}

export default connect(null, MapDispatchToProps)(LanguageSelection);
