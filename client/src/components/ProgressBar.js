const ProgressBar = ({ progress }) => {
  const colors = [
    'rgb(255,175,163)',
    'rgb(255,214,161)',
    'rgb(130, 172, 206)',
    'rgb(141,181,145)'
  ]
  const choosecorrectcolor = (progress) => {
    let floored= Math.floor(progress)
    if(floored<=25)
    return colors[0]
    if(floored<=50)
    return colors[1]
    if(floored<=75)
    return colors[2]
    if(floored>=80)
    return colors[3]

  }

  return (
    <div className="outer-bar">
      <div className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: `${choosecorrectcolor(progress)}` }}>


      </div>
    </div>
  )
}

export default ProgressBar
