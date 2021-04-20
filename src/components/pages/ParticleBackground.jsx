import React from 'react'
import Particles from 'react-particles-js'
import ParticleConfig from './particles-config/particle-config'

function ParticleBackground() {
    return (
        <Particles id='particles' params={ParticleConfig}></Particles>
    );
}

export default ParticleBackground
