import { Layout } from 'antd'

const { Footer: AntFooter } = Layout

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#fff',
    bottom: 0,
    width: '100%',
}

function Footer() {
    return (
        <AntFooter style={footerStyle}>
            Author - Andrian
        </AntFooter>
    )
}

export default Footer
