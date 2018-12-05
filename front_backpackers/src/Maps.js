import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Row, Col } from "reactstrap"

import "./Maps.css"

class Maps extends Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 12
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Row>
        <Col xs="12">
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
            </Marker>
          </Map>
        </Col>
      </Row>

    )
  }
}

export default Maps