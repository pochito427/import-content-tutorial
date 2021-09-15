/* * * HistoryPage * */
import React, { Component } from "react";
import {
  HeaderNav,
  LoadingIndicator,
  PluginHeader,
  request
} from "strapi-helper-plugin";
import pluginId from "../../pluginId";
import Row from "../../components/Row";
import Block from "../../components/Block";

const getUrl = to =>
  to ? `/plugins/${pluginId}/${to}` : `/plugins/${pluginId}`;

class HistoryPage extends Component {

    render() {
        return (
          <div className={"container-fluid"} style={{ padding: "18px 30px" }}>
            <PluginHeader
              title={"Import Content"}
              description={"Import CSV and RSS-Feed into your Content Types"}
            />
            <HeaderNav
                links={[
                  {
                    name: "Import Data",
                    to: getUrl("")
                  },
                  {
                    name: "Import History",
                    to: getUrl("history")
                  }
                ]}
                style={{ marginTop: "4.4rem" }}
            />
            <div className="row">
              <Block
                title="General"
                description="Manage the Initiated Imports"
                style={{ marginBottom: 12 }}
              />
            </div>
          </div>
        );
    }
}



export default HistoryPage;