export default function EventBanner() {
  return (
    <div className="sans w-full bg-fuchsia-200 px-16 py-4 text-2xl text-black">
      <div className="px-2">
        <span className="tracking-wide">
          <b>Next Upcoming Event:</b>
        </span>{' '}
        Cesium Demo Reel Night!
        <br />
        <span className="text-lg">
          {' '}
          Tuesday, October 17, 5:30 pm - 9:00 pm @ Cesium HQ
        </span>
      </div>
    </div>
  )
}
