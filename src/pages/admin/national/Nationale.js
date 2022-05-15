import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Nav, Pagination, Card, Table } from '@themesberg/react-bootstrap';
import NationalAPI from '../../services/NationalAPI';
import { Link } from 'react-router-dom';
import { Routes } from '../../../routes';


const Nationale = props => {

    const [national, setNational] = useState([]);

    const fetchNational = async () => {
        try {
            const data = await NationalAPI.findAll();
            setNational([data]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNational();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>nationale</Breadcrumb.Item>
                        <Breadcrumb.Item active>Nationale</Breadcrumb.Item>
                    </Breadcrumb>
                    <h4>Nationale</h4>
                </div>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup>
                        {/* <Button variant="outline-primary" size="sm">Share</Button> */}
                        <Button variant="outline-primary" size="sm">Exporter</Button>
                    </ButtonGroup>
                </div>
            </div>

            <div className="table-settings mb-4">
                <Row className="justify-content-between align-items-center">
                    <Col xs={8} md={6} lg={3} xl={4}>
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Rechercher" />
                        </InputGroup>
                    </Col>
                </Row>
            </div>

            <Card border="light" className="table-wrapper table-responsive shadow-sm">
                <Card.Body className="pt-0">
                    <Table hover className="user-table align-items-center">
                        <thead>
                            <tr>
                                <th className="border-bottom">Intitule</th>
                                <th className="border-bottom">Description</th>
                                <th className="border-bottom">Sigle</th>
                                <th className="border-bottom">Adresse</th>
                                <th className="border-bottom">Email</th>
                                <th className="border-bottom">Telephone1</th>
                                <th className="border-bottom">Telephone2</th>
                                <th className="border-bottom">Site web</th>
                                <th className="border-bottom">Logo</th>
                                <th className="border-bottom">Date creation</th>
                                <th className="border-bottom">Date mise à jour</th>
                                <th className="border-bottom">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {national.map(nation => (

                                <tr key={nation.id}>

                                    <td>
                                        <span className="fw-normal">
                                            {nation.intitule}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.description}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.sigle}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.adresse}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.email}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.telephone1}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.telephone2}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.siteweb}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.logo}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.created}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-normal">
                                            {nation.updated}
                                        </span>
                                    </td>


                                    <td>
                                        <Link to={`/EditNationale/${nation.id}`} type="button" className="btn btn-warning btn-sm text-white">
                                            Modifier
                                            <i className="fas fa-edit" />
                                        </Link>
                                        {/* <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                                                <span className="icon icon-sm">
                                                    <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/admin/#/liste-regionale">
                                                    <FontAwesomeIcon icon={faEye} className="me-2" /> Voir détail
                                                </Dropdown.Item>
                                                <Dropdown.Item as={Link} to={Routes.EditNationale.path}  >
                                                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Modifier
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-danger">
                                                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                                                </Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown> */}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Card.Body>

            </Card>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                <Nav>
                    <Pagination className="mb-2 mb-lg-0">
                        <Pagination.Prev>
                            Precedent
                        </Pagination.Prev>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item>4</Pagination.Item>
                        <Pagination.Item>5</Pagination.Item>
                        <Pagination.Next>
                            Suivant
                        </Pagination.Next>
                    </Pagination>
                </Nav>

            </Card.Footer>
        </>
    )
}
export default Nationale