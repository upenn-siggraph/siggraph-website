export default function EventBanner() {
  return (
    <div className="sans w-full bg-fuchsia-200 px-16 py-4 text-2xl text-black">
      <div className="px-2">
        <span className="tracking-wide">
          <b>Next Upcoming Event:</b>
        </span>{' '}
        Texturing workshop with Dineth!
        <br />
        <span className="text-lg">
          {' '}
          Sunday, November 5th @ GBM
        </span>
      </div>
    </div>
  )
}
