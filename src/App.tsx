import './App.css'
import { Layout, Space } from 'antd'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'

function App() {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header />
                <Content />
                <Footer />
            </Layout>
        </Space>
    )
}

export default App
