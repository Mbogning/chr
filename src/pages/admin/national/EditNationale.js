import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOnById } from '../../services/NationalAPI';


const EditNationale = props => {

    const param = useParams()
    const fileRef = useRef()
    const [national, setNational] = useState({
        "id": "string",
        "intitule": "string",
        "description": "string",
        "sigle": "string",
        "adresse": "string",
        "email": "string",
        "telephone1": "string",
        "telephone2": "string",
        "siteweb": "string",
        "logo": "string"
    }
    );

    const [errors, setErrors] = useState({
        intitule: "",
        description: "",
        sigle: "",
        adresse: "",
        email: "",
        telephone1: "",
        telephone2: "",
        siteweb: "",
        logo: "",
        nationalID: "",
        districts: [],
        national: []
    });

    useEffect(() => {
        getOnById(param.id).then(r => {
            console.log(r)
            setNational(r)
        })
    }, [])
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setNational({ ...national, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("id", national.id)
        formData.append("intitule", national.intitule)
        formData.append("sigle", national.sigle)
        formData.append("adresse", national.adresse)
        formData.append("email", national.email)
        formData.append("telephone1", national.telephone1)
        formData.append("telephone2", national.telephone2)
        formData.append("siteweb", national.siteweb)
        formData.append("logo", fileRef.current.files[0] && national.logo)

        fetch('https://cc-division.herokuapp.com/api/national/update', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(national)
        }).then(d => d.json()).then(data => {
            console.log(data)
        }).catch(e => console.log(e))

    };

    return (
        <form onSubmit={handleSubmit} >

            <div className="row">
                <div className="col-md-9 mx-auto ">
                    <div className="card">
                        <div className="card-body">
                            <div className="callout callout-success">
                                <center><h4>Modifier un District</h4></center>
                            </div>
                            <div className="alert alert-success" role="alert">
                                A simple success alert—check it out!
                            </div>
                            <div className="form-group mt-3">
                                <label>Intitule</label>
                                <input type="text"
                                    name="intitule"
                                    value={national.intitule}
                                    error={errors.intitule}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Intitule ..."

                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={national.description}
                                    onChange={handleChange}
                                    error={errors.description}
                                    placeholder="Description ..." />
                            </div>
                            <div className="form-group">
                                <label>Sigle</label>
                                <input
                                    type="text"
                                    name="sigle"
                                    value={national.sigle}
                                    onChange={handleChange}
                                    error={errors.sigle}
                                    className="form-control"
                                    placeholder="Sigle ..." />
                            </div>
                            <div className="form-group">
                                <label>Adresse</label>
                                <input
                                    type="text"
                                    name="adresse"
                                    value={national.adresse}
                                    onChange={handleChange}
                                    error={errors.adresse}
                                    className="form-control"
                                    placeholder="Adresse ..." />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={national.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    className="form-control"
                                    placeholder="Email ..." />
                            </div>
                            <div className="form-group">
                                <label>Telephone1</label>
                                <input
                                    type="number"
                                    name="telephone1"
                                    value={national.telephone1}
                                    onChange={handleChange}
                                    error={errors.telephone1}
                                    className="form-control"
                                    placeholder="Telephone 1" />
                            </div>
                            <div className="form-group">
                                <label>Telephone2</label>
                                <input
                                    type="number"
                                    name="telephone2"
                                    value={national.telephone2}
                                    onChange={handleChange}
                                    error={errors.telephone2}
                                    className="form-control"
                                    placeholder="Telephone 2 ..." />
                            </div>
                            <div className="form-group">
                                <label>Site Web</label>
                                <input
                                    type="text"
                                    name="siteweb"
                                    value={national.siteweb}
                                    onChange={handleChange}
                                    error={errors.siteweb}
                                    className="form-control"
                                    placeholder="Site Web ..." />
                            </div>
                            <div className="form-group">
                                <label>Logo</label>
                                <input
                                    ref={fileRef}
                                    type="file"
                                    name="logo"
                                    error={errors.logo}
                                    className="form-control"
                                    placeholder="Logo ..." />
                            </div>
                            {/* <div className="form-group">
                            <label>NationalID</label>
                            <input
                                type="text"
                                name="nationalID"
                                value={region.national && region.national.id}
                                onChange={handleChange}
                                error={errors.nationalID}
                                className="form-control"
                                placeholder="NationalID ..." />
                        </div> */}

                        </div>
                    </div>
                    <center>
                        <div className='form-group'>
                            <button type="submit" className="btn btn-success text-white">
                                Enregistrer
                            </button>

                            <Link to={'/admin/district'} className="btn btn-link">Retourner aux districts</Link>
                        </div>

                    </center>

                </div>
            </div>
        </form>

    )
}
export default EditNationale