import React, { Fragment } from "react";
import { Row, Col, Button, Media, Badge } from "reactstrap";
import { Link } from "react-router-dom";

import "./Profile.scss";

const Profile = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="4">
          <Link to="/">
            <Button className="previousPage py-0 px-3 mt-4">
              <i className="fas pr-2 fa-angle-left" />
              Retour
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ size: 6, offset: 3 }}
          className="profilePicture justify-content-center d-flex"
        >
          <Button className="bg-transparent border-0 mb-3 rounded-circle">
            <img
              className="rounded-circle"
              src="https://via.placeholder.com/75"
              alt="profile"
            />
          </Button>
        </Col>
      </Row>
      <div className="userInfos">
        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="text-center mb-2">
            <h4 className="mb-0">Aude Javel</h4>
            <span>audej@gmail.com</span>
          </Col>
          <Col xs="2">
            <Button className="bg-transparent border-0 text-secondary p-0">
              <i className="fas fa-pencil-alt" alt="Photo de profil" />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={{ size: 8, offset: 2 }} className="text-center">
            <p className="mb-0">Fan du japon, backpackeuse et gourmande</p>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="text-center mt-3">
          <div className="achievements d-inline-block p-1">
            <img
              className="px-1"
              src="https://via.placeholder.com/30"
              alt="badge"
            />
            <img
              className="px-1"
              src="https://via.placeholder.com/30"
              alt="badge"
            />
            <img
              className="px-1"
              src="https://via.placeholder.com/30"
              alt="badge"
            />
            <img
              className="px-1"
              src="https://via.placeholder.com/30"
              alt="badge"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
      </Row>

      <Row>
        <Col xs="12" className="text-center">
          <Badge className="py-1 px-2 mx-1">AquaPoney</Badge>
          <Badge className="py-1 px-2 mx-1">Cinéma</Badge>
          <Badge className="py-1 px-2 mx-1">Japon</Badge>
          <Badge className="py-1 px-2 mx-1">Jeux Vidéo</Badge>
        </Col>
      </Row>

      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
      </Row>

      <Row className="activityCreated">
        <Col xs="12" className="text-center mt-2">
          <p>Vous n'avez proposé pour le moment aucune activité.</p>
        </Col>
      </Row>

      <Row>
        <Col xs={{ size: 8, offset: 2 }} className="homeUnderline my-2" />
      </Row>

      <Row>
        <Col xs="12">
          <h2 className="pr-3">Historique des anciennes activitées</h2>
          <div className="activitiesTitleUnderline mb-3 w-100" />
        </Col>

        <Col xs="12">
          <Media className="d-flex align-items-stretch">
            <Media left href="#">
              <Media
                object
                src="https://via.placeholder.com/150"
                alt="picture of activity"
                className="activityPicture"
              />
            </Media>
            <Media body className="d-flex flex-column">
              <Media
                heading
                className="mb-1 mx-1 d-flex justify-content-between"
              >
                <span>
                  <i className="fas fa-location-arrow pr-1" />
                  ATHENES
                </span>
                <span>
                  <i className="fas fa-calendar pr-1" />
                  Ferme dans 5 jours
                </span>
              </Media>
              Salut ! Je Cherche 5 rafteurs pour rafter le long du fleuve ! Va
              va être CHANMAXX n'hésitez pas à vous inscrire!
              <div className="d-flex align-items-end justify-content-between mt-auto">
                <Button className="seeItem">Voir</Button>
                <span className="itemListPrice pr-2">
                  15€ /
                  <i className="far fa-user" />
                </span>
              </div>
            </Media>
          </Media>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Profile;
