import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { FaRegClock } from 'react-icons/fa';

import {
  Header,
  Page,
  Container,
  Table,
  Search,
  TableData,
  TableHeader,
  Pagination,
} from '../../Components/index';
import { PageTitle, Loading, SearchPage, BbsLink } from './styles';
import logo from '../../assets/logo.jpg';

export default class Home extends Component {
  state = {
    observations: [],
    loading: true,
    loadingPage: false,
    page: 1,
    search: false,
  };

  async componentDidMount() {
    const response = await api.get(
      `/object/BehBasSaf_BBSObject?$top=30&$skip=0&$expand=Location($select=Name),CreatedBy($select=FullName, FirstName),Categories&$orderby=AssessmentDate desc`
    );

    this.setState({
      observations: response.data.value,
      loading: false,
    });

    console.log(this.state.observations);
  }

  handlePageClick = async e => {
    const nextPage = Number(e.target.value);

    await this.setState({ page: nextPage });

    this.loadBBS();
  };

  loadBBS = async () => {
    const { page } = this.state;

    await this.setState({
      loadingPage: true,
    });

    const response = await api.get(
      `/object/BehBasSaf_BBSObject?$top=30&$skip=${(page - 1) *
        30}&$expand=Location($select=Name),CreatedBy($select=FullName, FirstName),Categories&$orderby=AssessmentDate desc`
    );

    this.setState({
      observations: response.data.value,
      loadingPage: false,
    });
  };

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
    const { observations, loading, page, loadingPage, search } = this.state;
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
            <PageTitle>My Safety Observations</PageTitle>
            <Table>
              <tbody>
                <tr>
                  <TableHeader>Record No.</TableHeader>
                  <TableHeader>Location</TableHeader>
                  <TableHeader>Assessment Date</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Employee Observed</TableHeader>
                </tr>
                {observations.map((bbs, index) => (
                  <tr key={observations[index].Id}>
                    <TableData>
                      <BbsLink>
                        <Link to={`/Obsdetails/${observations[index].Id}`}>
                          {observations[index].RecordNo}
                        </Link>
                      </BbsLink>
                    </TableData>
                    <TableData>{observations[index].Location.Name}</TableData>
                    <TableData>{observations[index].AssessmentDate}</TableData>
                    <TableData>
                      {observations[index].WorkflCompleted === true
                        ? 'Completed'
                        : 'In Progress'}
                    </TableData>
                    <TableData>{observations[index].EmployeeText}</TableData>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination>
              {page === 1 ? (
                ''
              ) : (
                <button value={page - 1} onClick={this.handlePageClick}>
                  Previous
                </button>
              )}
              <span>Page: {page}</span>
              <button value={page + 1} onClick={this.handlePageClick}>
                Next
              </button>
            </Pagination>
          </Container>
        </Page>
      </>
    );
  }
}
