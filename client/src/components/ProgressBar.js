const ProgressBar = ({ progress }) => {
  const getProgressColor = (progress) => {
    let floored = Math.floor(progress)
    if (floored <= 25)
      return 'rgb(255,175,163)'
    if (floored <= 50)
      return 'rgb(255,214,161)'
    if (floored <= 75)
      return 'rgb(130, 172, 206)'
    if (floored >= 80)
      return 'rgb(141,181,145)'
  }

  return (
    <div className="outer-bar">
      <div className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: `${getProgressColor(progress)}` }}>


      </div>
    </div>
  )
}

export default ProgressBar
