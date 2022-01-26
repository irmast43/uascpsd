import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        
        <li className={this.isPathActive('/forms', '/table') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Forms <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                {/* <li className={this.isPathActive('/forms/regular-forms') ? 'active' : null}>
                  <Link to="/forms/regular-forms">Regular Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Extended Forms</Link>
                </li> */}
                <li className={this.isPathActive('/forms/tambah-obat') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Tambah Obat</Link>
                </li>
                <li className={this.isPathActive('/tables/lihat-obat') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Lihat Obat</Link>
                </li>
                <li className={this.isPathActive('/tables/obat-habis') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Obat Habis</Link>
                </li>
                <li className={this.isPathActive('/tables/obat-kadaluarsa') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Obat Kadaluarsa</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/tables', '/forms') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>Tables <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                {/* <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li> */}
                <li className={this.isPathActive('/forms/tambah-penjualan') ? 'active' : null}>
                  <Link to="/forms/tambah-penjualan">Tambah Penjualan</Link>
                </li>
                <li className={this.isPathActive('/tables/lihat-penjualan') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Lihat Penjualan</Link>
                </li>
                {/* <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                </li> */}
                
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);