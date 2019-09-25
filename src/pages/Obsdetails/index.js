import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Page,
  Header,
  Container,
  Search,
  SearchPage,
  Loading,
  PageTitle,
} from '../../Components/index';
import {} from './styles';

import { FaRegClock } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';

export default class Obsdetails extends Component {
  state = {
    observations: [],
    loading: true,
    loadingPage: false,
    page: 1,
    search: false,
    BBSDetails: '',
  };

  async componentDidMount() {
    const { match } = this.props;
    const actualBBS = decodeURIComponent(match.params.bbs);

    const response = await api.get(
      `/object/BehBasSaf_BBSObject(${actualBBS})?$expand=Location($select=Name),CreatedBy($select=FullName, FirstName),Categories`
    );

    this.setState({
      observations: response.data,
      loading: false,
      BBSDetails: actualBBS,
    });

    console.log(response.data.RecordNo);
  }

  openSearch = async () => {
    await this.setState({
      search: true,
    });
  };

  closeSearch = async () => {
    await this.setState({
      search: false,
    });
  };

  render() {
    const { page, loading, loadingPage, search, observations } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    if (loadingPage) {
      return <Loading>Loading Page: {page}...</Loading>;
    }

    if (search) {
      return (
        <SearchPage>
          <input type="text" placeholder="Search..." />
          <span id="closeBtn" onClick={this.closeSearch}>
            X
          </span>
          <span>Recently Searched:</span>
          <span id="recents">
            <FaRegClock />
            <small>5m</small>
            Lorem Ipsum
          </span>
          <span id="recents">
            <FaRegClock />
            <small>15m</small>
            Lorem Ipsum
          </span>
          <span id="recents">
            <FaRegClock />
            <small>24m</small>
            Lorem Ipsum
          </span>
          <span id="recents">
            <FaRegClock />
            <small>25m</small>
            Lorem Ipsum
          </span>
        </SearchPage>
      );
    }

    return (
      <>
        <Page>
          <Header>
            <div id="logo">
              <Link to="/home">
                <img src={logo} alt="SafetyBBSlogo" />
              </Link>
            </div>
            <div>
              <Search>
                <input
                  type="text"
                  placeholder="Search observations"
                  id="search"
                  onClick={this.openSearch}
                />
              </Search>
            </div>
          </Header>
          <Container>
            <PageTitle>Obsersavtion: {observations.RecordNo}</PageTitle>
          </Container>
        </Page>
      </>
    );
  }
}
