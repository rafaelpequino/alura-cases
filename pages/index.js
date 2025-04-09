import Link from '../src/components/Link'

export default function HomePage() {
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <Link href="/faq">
                Ir para página do FAQ
            </Link>
        </div>
    )
}