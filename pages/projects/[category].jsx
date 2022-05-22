import FullPage from '@fullpage/react-fullpage'

const fullpageOptions = {
    anchors: [ 'page1', 'page2', 'page3' ]
}

const FullPageWrapper = (props) => {
    return <FullPage
        { ...props }
        render={
            ({ state, fullpageApi }) => {
                return <>{ props.children }</>
            }
        }
    />
}

const ProjectView = () => {
    return <FullPageWrapper
        { ...fullpageOptions }
    >
    </FullPageWrapper>
}

export default ProjectView