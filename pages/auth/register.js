import Layout from '../../components/Layout/Layout'
import RegisterForm from '../../components/Auth/RegisterForm'

export default function Register() {
  return (
    <Layout title="Register - Mizili">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Join Mizili</h1>
        <RegisterForm />
      </div>
    </Layout>
  )
}
