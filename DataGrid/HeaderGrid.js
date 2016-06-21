import React from 'react';


class HeaderComponent extends React.Component {

  textOnClick(e) {
    e.stopPropagation();
  }

  filterText(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  }

  render() {
    return (
      <span>
        <div>
          <strong>
            {this.props.displayName}
          </strong>
        </div>
        <input type='text' onChange={this.filterText.bind(this)} onClick={this.textOnClick.bind(this)} />
      </span>
    );
  }

}


export default HeaderComponent;