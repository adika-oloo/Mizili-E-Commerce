import Layout from '../../components/Layout/Layout'
import LoginForm from '../../components/Auth/LoginForm'

export default function Login() {
  return (
    <Layout title="Login - Mizili">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Login to Mizili</h1>
        <LoginForm />
      </div>
    </Layout>
  )
}
