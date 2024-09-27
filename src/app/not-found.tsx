import Arrow from '@/components/arrow'
import H2 from '@/components/heading2'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4 text-gray-50'>
      <H2>Not Found</H2>
      {/* Message : Tu t'es trompé de désert, le dinosaure n'est pas ici. */}
      <p>You&apos;ve wandered into the wrong desert, the dinosaur isn&apos;t here.</p>
      <div className='border border-gray-700 px-4 py-2'>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 group"
        >
          Return Home 
          <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
            <Arrow rotate color={50} />
          </div>
        </a>
      </div>
    </div>
  )
}