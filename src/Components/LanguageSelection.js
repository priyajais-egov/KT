import React, { Component } from "react";
import { connect } from "react-redux";
import LanguageSelectionForm from "./LanguageSelectionForm";

class LanguageSelection extends Component {
    state = {
        items: [
          {
            label: "ENGLISH",
            value: "en_IN",
          },
          {
            label: "हिंदी",
            value: "hi_IN",
          },
          {
            label: "ਪੰਜਾਬੀ",
            value: "pn_IN",
          },
        ],
      };
  
//   onClick = (value) => {
//     this.setState({ value });
//     this.props.fetchLocalizationLabel(value);
//   };

//   onLanguageSelect = () => {
//     this.props.history.push("/user/register");
//   };

  render() {
    const { items = [] } = this.state;
    return (
        <LanguageSelectionForm items={items} />
        
    );
  }
}

// const mapStateToProps = ({ common }) => {
//   const { stateInfoById } = common;
//   let languages = get(stateInfoById, "0.languages", []);
//   return { languages };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchLocalizationLabel: (locale) => dispatch(fetchLocalizationLabel(locale)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LanguageSelection);

export default LanguageSelection;
