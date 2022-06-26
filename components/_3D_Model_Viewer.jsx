import '@google/model-viewer'

const _3D_Model_Viewer = ({
    link
}) => {
    return <model-viewer
        style={ { width: '100%', height: '100%' } }
        src={ link }
        alt='3D Model for The Ed'
        shadow-intensity="1"
        camera-controls
        ar
        bounds="tight"
        ar-modes="webxr scene-viewer quick-look"
        enable-pan
    >

    </model-viewer>
}

export default _3D_Model_Viewer