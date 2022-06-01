import FullPage from '@fullpage/react-fullpage'

const fullpageOptions = {
    anchors: [ 'page1', 'page2', 'page3' ],
    // licenseKey: 'gplv3-license'
}

const FullPageWrapper = (props) => {
    return <FullPage
        navigation
        {...props}
        licenseKey={'gplv3-license'}
        render={({ state, fullpageApi }) => {
            return <>{props.children}
            </>
        }
        }
    />
}

const ProjectView = () => {
    return <FullPageWrapper
        {...fullpageOptions}
    >
        <div className="section">
            PAGE 1
        </div>
        <div className="section">
            PAGE 2
        </div>
        <div className="section">
            PAGE 3
        </div>

    </FullPageWrapper>
}


export default ProjectView