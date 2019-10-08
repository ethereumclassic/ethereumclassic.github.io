import React from "react";

import withI18next from "../i18n/withI18next";

import '../assets/sass/main.scss'

class Index extends React.Component {

    render() {
        const { children } = this.props

        return (
          <div>
            {children}
          </div>
        )
    }
}


export default withI18next()(Index);
