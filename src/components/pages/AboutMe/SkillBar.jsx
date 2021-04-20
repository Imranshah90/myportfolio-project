import React from 'react'

const SkillBar =({value: {name,level} }) => {
    const barWidth = `${level}%`;
    return (
    <div className="bar">
      <h5>{name}</h5>
      <div className="progress">
        <div className="progress-bar" style={{'width':barWidth}}></div>
        <div className="percentage">{level}%</div>
      </div>
    </div>
    );
};
export default SkillBar




