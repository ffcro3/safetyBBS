import React, { Component } from 'react';

import api from '../../services/api';

import {
  Header,
  Page,
  Container,
  Table,
  TableData,
  TableHeader,
  Pagination,
} from '../../Components/index';
import { PageTitle, Loading } from './styles';
import logo from '../../assets/logo.jpg';

export default class Home extends Component {
  state = {
    observations: [],
    loading: true,
    loadingPage: false,
    page: 1,
  };

  async componentDidMount() {
    const response = await api.get(
      `/object/BehBasSaf_BBSObject?$top=30&$skip=121000&$expand=Location($select=Name),CreatedBy($select=FullName, FirstName),Categories`
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
    const { page, loadingPage } = this.state;

    await this.setState({
      loadingPage: true,
    });

    const response = await api.get(
      `/object/BehBasSaf_BBSObject?$top=30&$skip=${(page - 1) *
        30}&$expand=Location($select=Name),CreatedBy($select=FullName, FirstName),Categories`
    );

    this.setState({
      observations: response.data.value,
      loadingPage: false,
    });
  };

  render() {
    const { observations, loading, page, loadingPage } = this.state;
    if (loading) {
      return <Loading>Carregando BBS...</Loading>;
    }

    if (loadingPage) {
      return <Loading>Carregando página {page}...</Loading>;
    }

    return (
      <>
        <Page>
          <Header>
            <img src={logo} alt="SafetyBBSlogo" />
            <input type="text" placeholder="Procurar BBS" id="search" />
          </Header>
          <Container>
            <PageTitle>Meus BBS</PageTitle>
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
                    <TableData>{observations[index].RecordNo}</TableData>
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
                  Anterior
                </button>
              )}
              <span>Página: {page}</span>
              <button value={page + 1} onClick={this.handlePageClick}>
                Próxima
              </button>
            </Pagination>
          </Container>
        </Page>
      </>
    );
  }
}
