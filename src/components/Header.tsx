import { Layout } from 'antd'

const { Header: AntHeader } = Layout

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#fff',
}

function Header() {
    return (
        <AntHeader style={headerStyle}>
            {/* I Am Hungry */}
        </AntHeader>
    )
}

export default Header
